---
title: "Generative Retrieval: Scaling PLUM with Hierarchical Semantic IDs"
date: 2025-11-24 09:00:00 -0500
categories: [Machine Learning, Recommendation Systems]
tags: [recsys, generative-ai, plum, transformers, pytorch, rq-vae, vector-quantization]
math: true
image:
  path: /assets/img/posts/plum-architecture.png
---

The landscape of recommendation systems (RecSys) is undergoing a paradigm shift. We are moving away from traditional "score-and-rank" models toward **Generative Retrieval**, where an LLM directly generates the identity of the next recommended item as a sequence of discrete tokens.

In this project, I implemented **PLUM** (Pre-trained Language Models for Industrial-scale Generative Recommendations), focusing on the critical challenge of representing millions of items in a way that an LLM can understand and generate.

## 1. The "Embedding Similarity Trap": An Ablation Study

A core challenge in Semantic ID (SID) generation is the quality of the base embeddings. If items are too close in the latent space, the quantization process will fail to produce discriminative tokens.

I conducted an ablation study comparing two text encoding strategies using the MovieLens dataset:

| Strategy | Encoder Model | Dim | Mean Cosine Sim | Median Sim |
| :--- | :--- | :--- | :--- | :--- |
| **Naive Metadata** | TinyBERT | 128 | **0.8557** | 0.8721 |
| **Enriched Text** | TinyBERT | 128 | 0.8124 | 0.8310 |
| **State-of-the-Art** | all-MiniLM-L6-v2 | 384 | **0.3658** | 0.3412 |

**Key Learning:** Text enrichment (adding genre descriptions and release years) provided only a marginal ~5% improvement. The real breakthrough came from increasing the "Semantic Headroom" by moving to a more expressive encoder (MiniLM), which dropped mean similarity by **57%**. This provided the necessary variance for the RQ-VAE to thrive.

## 2. Multi-Modal Fusion and Contrastive Alignment

To represent items, we fuse multiple modalities into a unified latent vector $z$:

$$z = \text{LayerNorm}(\text{Projector}(\text{Concat}(E_{text}(x_{text}), E_{visual}(x_{visual}))))$$

To ensure that items consumed together have similar SIDs, I implemented a **Co-occurrence Contrastive Loss** (InfoNCE) that aligns the generative space with user behavior:

$$\mathcal{L}_{NCE} = -\log \frac{\exp(\text{sim}(z_q, z_q^+)/\tau)}{\sum_{j} \exp(\text{sim}(z_q, z_{q,j}^-)/\tau)}$$

## 3. Architecture: RQ-VAE with Dead Code Revival

PLUM maps item embeddings into a 3-level hierarchical SID using a **Residual Quantized Variational AutoEncoder (RQ-VAE)**.

### The Quantization Process
At each level $l \in \{1, \dots, L\}$, we compute a residual $r_l$ and find the nearest codebook vector $e_l$:
$$r_l = r_{l-1} - e_l, \quad e_l = \text{argmin}_{e \in \mathcal{C}_l} \|r_{l-1} - e\|^2$$
The final reconstructed vector is $z_q = \sum_{l=1}^L e_l$.

### Codebook Stability Ablation
Without intervention, codebooks often "collapse" (only a few vectors are used). I tested two mechanisms to combat this:
1.  **K-means Initialization:** Initializing codebooks using cluster centers of the data.
2.  **Dead Code Revival:** Re-assigning unused codebook vectors to random high-loss residuals every 1000 steps.

**Results:** Combining both methods achieved **100% codebook utilization** during training for both ML-1M and ML-10M.

## 4. Empirical Results: Training and Inference Diversity

The model was evaluated on **MovieLens 1M** and **10M** datasets.

### SID Model Performance
| Dataset | Level Config | Training Utilization | Final Recon Loss (MSE) | Cosine Sim ($z, z_q$) |
| :--- | :--- | :--- | :--- | :--- |
| **ML-1M** | [64, 64, 64] | 100% | 0.0008 | 0.7245 |
| **ML-10M**| [512, 256, 128] | 100% | 0.0009 | 0.7553 |

### The "Inference Drop-off" Challenge
While training utilization was perfect, I observed a significant drop-off in uniqueness during inference, especially for the larger dataset:

| Level | ML-1M Inference Usage | ML-10M Inference Usage |
| :--- | :---: | :---: |
| Level 1 | 100% | 100% |
| Level 2 | 82.8% | **60.2%** |
| Level 3 | 76.6% | **48.4%** |

This suggests that as the catalog size scales, the model struggles to maintain discriminative power in deeper hierarchical levels, leading to Semantic ID "collisions."

## 5. Downstream LLM Training

Finally, a **DistilGPT2** model was trained to predict the next SID token.

| Dataset | Step | Train Loss | Val Loss | Perplexity |
| :--- | :--- | :--- | :--- | :--- |
| **ML-10M** | 10,000 | 0.1703 | **0.2063** | **1.2291** |

The extremely low perplexity (1.23) indicates that the LLM has effectively learned the sequential patterns of the generated Semantic IDs, confirming that turning items into "language" is a viable path for industrial-scale recommendation.

## Conclusion

PLUM proves that generative retrieval is not just a theoretical curiosity. However, the **Embedding Similarity Trap** and **Inference-Time Codebook Collapse** are real technical hurdles that require careful architectural choices—specifically, high-headroom encoders and active codebook management.

***

*View the implementation, experiment logs, and validation plots on GitHub: [vishsangale/PLUM](https://github.com/vishsangale/PLUM)*
