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

## 2. Architecture: RQ-VAE with Dead Code Revival

The heart of PLUM is mapping item embeddings into a 3-level hierarchical SID (64-32-16 codebook configuration). 

### Dead Code Revival
A major stability issue in vector quantization is "codebook collapse," where only a few vectors are ever used. To solve this, I implemented a **Dead Code Revival** mechanism that resets unused codes every 1000 batches to random embeddings from the current batch. This ensured **100% codebook utilization** across all three hierarchical levels during training.

### Inference-Time Codebook Collapse
A fascinating research finding was that 100% utilization during training *does not* guarantee diversity during inference. I observed that level 2 utilization could drop as low as **12.5%** at inference time. Solving this required implementing **K-means initialization** for the codebook vectors, aligning them with the actual data distribution before training began.

## 3. Training Dynamics and Results

Using the **MovieLens 1M** dataset as a benchmark, the training results showed significant convergence in reconstruction quality:

| Metric | Epoch 1 | Epoch 3 |
| :--- | :--- | :--- |
| **Loss** | 5.8208 | **4.9935** |
| **Cosine Similarity** | 0.6487 | **0.7225** |

### TensorBoard Insights
The learning curves revealed that lowering the `commitment_beta` to encourage exploration actually backfired, reducing the uniqueness of the generated SIDs. A strong commitment loss (**beta=1.0**) proved optimal for forcing the model to commit to specific codebook entries, leading to more stable and unique identifiers.

## 4. Why Generative Retrieval Matters

By turning "items" into "language," PLUM eliminates the massive, memory-heavy final softmax layer that plagues traditional models. It allows us to leverage the sequential reasoning of Transformers to find non-obvious patterns in user behavior, especially for long-tail items where traditional matrix factorization often fails.

## Conclusion

PLUM proves that the same scaling laws that transformed NLP are ready to redefine RecSys. However, as my experiments showed, the "craft" of the underlying quantization—from embedding selection to codebook revival—is what ultimately determines the system's success.

***

*View the implementation and research notes on GitHub: [vishsangale/PLUM](https://github.com/vishsangale/PLUM)*
