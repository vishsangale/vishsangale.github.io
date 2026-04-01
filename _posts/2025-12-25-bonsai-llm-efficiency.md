---
title: "Bonsai-LLM: The 'Small LLMs Lab' Philosophy"
date: 2025-12-25 09:00:00 -0500
categories: [Machine Learning, LLMs]
tags: [small-llms, gemma, optimization, efficiency, fine-tuning, benchmarks]
math: true
image:
  path: /assets/img/posts/03.jpg
---

In an era of trillion-parameter models and massive compute clusters, it's easy to forget that **capacity matters, constraints are the point, and craft beats brute force.** 

This is the philosophy behind **BONSAI-LLM**, a "Small LLMs Lab" where I focus on training and optimizing compact models that punch far above their weight.

## 1. Quality Over Quantity: Data Curation

The project prioritizes "high-signal" data over raw volume. By using a curated 10B token sample of **FineWeb-Edu**, my implementation achieved a validation perplexity of **23.85**, significantly lower than models trained on 10x more "dirty" web crawl data.

## 2. Implementing Gemma 3: Architectural Stability

The repository features a from-scratch implementation of the **Gemma 3** architecture. Beyond standard Transformer blocks, I incorporated several "2025-ready" features to maximize efficiency:

### QK Norm (Query-Key Normalization)
To prevent attention scores from exploding during high-throughput training, I implemented **QK Norm**. Before the dot-product calculation, both Query ($Q$) and Key ($K$) vectors are normalized:
$$Q' = \text{RMSNorm}(Q), \quad K' = \text{RMSNorm}(K)$$
$$\text{Attention}(Q', K', V) = \text{Softmax}\left(\frac{Q' K'^T}{\sqrt{d_k}}\right) V$$

### Grouped-Query Attention (GQA) and SWA
To optimize memory bandwidth and speed, the model uses **GQA**, allowing multiple query heads to share a single key-value head. This is paired with **Sliding Window Attention (SWA)** for local layers, reducing complexity to $O(N \times W)$.

## 3. Results: Convergence and Reasoning Performance

The "Bonsai" approach was validated through extensive training on the FineWeb dataset.

| Metric | Baseline (Step 0) | FineWeb V0 (Final) |
| :--- | :---: | :---: |
| **Validation Loss** | 10.99 | **3.1719** |
| **Perplexity (PPL)** | ~60,000 | **23.8537** |
| **Throughput (tok/sec)** | ~5,600 | **20,084.77** |

### Zero-Shot Reasoning Benchmarks
The model's ability to reason was tested using the `lm-eval` harness across three standard tasks:

| Task | Metric | Bonsai-LLM (1B) | Random Baseline |
| :--- | :--- | :---: | :---: |
| **PIQA** | Accuracy | **62.08%** | ~50% |
| **HellaSwag** | Accuracy | **28.75%** | ~25% |
| **ARC-Easy** | Accuracy | **41.20%** | ~25% |

**Research Insight:** The jump in **PIQA (62.08%)** is particularly notable for a 1B parameter model, indicating that the architecture has effectively captured physical commonsense reasoning from the high-quality FineWeb-Edu corpus.

## 4. Modernizing the MLP: SwiGLU

The model utilizes a **SwiGLU-style MLP** for increased representational capacity:
$$\text{Output} = \text{DownProj}(\text{SiLU}(\text{GateProj}(x)) \otimes \text{UpProj}(x))$$
This activation function provides a better balance of nonlinearity and gradient flow compared to standard GeLU, contributing to the model's stable convergence.

## Conclusion

**BONSAI-LLM** is a reminder that the future of AI isn't just about scaling up—it's about scaling down intelligently. As we move toward on-device AI and specialized agents, the ability to craft small, efficient, and capable models will be a defining skill for the next generation of researchers.

***

*Explore the "Small LLMs Lab" implementation and full benchmark logs on GitHub: [vishsangale/BONSAI-LLM](https://github.com/vishsangale/bonsai-llm)*
