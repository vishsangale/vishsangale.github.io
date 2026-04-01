---
title: "Generative Retrieval: Scaling PLUM with Hierarchical Semantic IDs"
date: 2025-11-24 09:00:00 -0500
categories: [Machine Learning, Recommendation Systems]
tags: [recsys, generative-ai, plum, transformers, pytorch, rq-vae]
math: true
image:
  path: /assets/img/posts/02.jpg
---

The landscape of recommendation systems (RecSys) is undergoing a paradigm shift. We are moving away from traditional "score-and-rank" models toward **Generative Retrieval**, where an LLM directly generates the identity of the next recommended item as a sequence of discrete tokens.

In this project, I implemented **PLUM** (Pre-trained Language Models for Industrial-scale Generative Recommendations), focusing on the critical challenge of representing millions of items in a way that an LLM can understand and generate.

## 1. The "Embedding Similarity Trap"

One of the most authentic technical hurdles I encountered was selecting the right base embedding for the **RQ-VAE**. 

Initially, I used **TinyBERT (128-dim)** to encode movie metadata. However, I discovered an "embedding similarity trap": the mean cosine similarity between items was **0.8557**. This was far too high for the RQ-VAE to generate unique, discriminative Semantic IDs (SIDs). Switching to **all-MiniLM-L6-v2 (384-dim)** dropped the mean similarity to **0.3658**, providing the "semantic headroom" needed to effectively tokenize the catalog.

Validation plots like the **Similarity Distribution** and **Heatmap** (see `plum/plum/data/movielens-10m/validation_plots/`) confirmed that the richer embeddings provided a much more diverse starting point for quantization.

## 2. Multi-Modal Fusion

To represent items, we first fuse multiple modalities (textual descriptions, visual features, etc.) into a unified latent vector $z$:

$$z = \text{LayerNorm}(\text{Projector}(\text{Concat}(E_1(x_1), \dots, E_M(x_M))))$$

Where $E_m$ are modality-specific encoders and $x_m$ are the raw input features.

## 3. Architecture: RQ-VAE with Dead Code Revival

The heart of PLUM is mapping item embeddings into a 3-level hierarchical SID using a **Residual Quantized Variational AutoEncoder (RQ-VAE)**.

### The Quantization Process
At each level $l \in \{1, \dots, L\}$, we compute a residual $r_l$ and find the nearest codebook vector $e_l$:
$$r_l = r_{l-1} - e_l, \quad e_l = \text{argmin}_{e \in \mathcal{C}_l} \|r_{l-1} - e\|^2$$
The final Semantic ID is the sequence of indices $(i_1, i_2, \dots, i_L)$, and the reconstructed vector is $z_q = \sum_{l=1}^L e_l$.

### Dead Code Revival & Commitment Loss
To prevent "codebook collapse," I implemented a **Dead Code Revival** mechanism and a strict commitment loss:
$$\mathcal{L}_{commit} = \sum_{l=1}^L \left( \beta \|r_{l-1} - \text{sg}[e_l]\|^2 + \|\text{sg}[r_{l-1}] - e_l\|^2 \right)$$
A commitment coefficient $\beta=1.0$ proved optimal for forcing the model to commit to specific codebook entries, ensuring **100% codebook utilization** across all three hierarchical levels.

## 4. Co-occurrence Contrastive Learning

To ensure that items consumed together have similar SIDs, I added a **Co-occurrence Contrastive Loss** (InfoNCE):
$$\mathcal{L}_{NCE} = -\log \frac{\exp(\text{sim}(z_q, z_q^+)/\tau)}{\sum_{j} \exp(\text{sim}(z_q, z_{q,j}^-)/\tau)}$$
This loss aligns the generative space with actual user behavior, making the LLM's task of predicting the next SID much easier.

## 5. Training Dynamics and Results

My experiments on **MovieLens 1M** and **10M** showed strong convergence:

| Dataset | Metric | Step 0 | Final Step |
| :--- | :--- | :--- | :--- |
| **ML-1M** | Total Loss | 5.2231 | **4.7059** |
| **ML-1M** | Cosine Sim | 0.6879 | **0.7245** |
| **ML-10M** | Total Loss | 6.6362 | **5.3263** |
| **ML-10M** | Contrast Loss| 6.2965 | **4.9322** |

### Codebook Utilization
| Level | Unique Codes (Training) | Unique Codes (Inference) |
| :--- | :--- | :--- |
| Level 1 | 100% | 100% |
| Level 2 | 100% | **84.5%** |
| Level 3 | 100% | **42.2%** |

By using **K-means initialization**, I improved Level 2 inference-time utilization from 12.5% to 84.5%, vastly increasing the discriminative power of the SIDs.
