---
title: "Bonsai-LLM: The 'Small LLMs Lab' Philosophy"
date: 2025-12-25 09:00:00 -0500
categories: [Machine Learning, LLMs]
tags: [small-llms, gemma, optimization, efficiency, fine-tuning]
math: true
image:
  path: /assets/img/posts/05.jpg
---

In an era of trillion-parameter models and massive compute clusters, it's easy to forget that **capacity matters, constraints are the point, and craft beats brute force.** 

This is the philosophy behind **BONSAI-LLM**, a "Small LLMs Lab" where I focus on training and optimizing compact models that punch far above their weight.

## 1. Craft Over Brute Force

The goal of **BONSAI-LLM** isn't to build the largest model, but the most *optimized* one. By working within the constraints of smaller parameter counts (like my ~1B parameter implementation of **Gemma 3**), we are forced to be more intentional about the quality of our data and the efficiency of our architecture.

### Data Curation: FineWeb-Edu
The project prioritizes "high-signal" data over raw volume. By using a 10B token sample of **FineWeb-Edu**, my implementation achieved a validation perplexity of **45.36** within 100k steps. This demonstrated that a smaller model trained on curated data can outperform a larger model trained on "dirty" web crawls.

## 2. Implementing Gemma 3: Architectural Stability

The repository features a from-scratch implementation of the **Gemma 3** architecture. Beyond standard Transformer blocks, I incorporated several "2025-ready" features:

### QK Norm (Query-Key Normalization)
To improve training stability at scale and prevent attention scores from exploding, I implemented **QK Norm**. Before the attention calculation, both Query ($Q$) and Key ($K$) vectors are normalized:
$$Q' = \text{RMSNorm}(Q), \quad K' = \text{RMSNorm}(K)$$
$$\text{Attention}(Q', K', V) = \text{Softmax}\left(\frac{Q' K'^T}{\sqrt{d_k}}\right) V$$

### Sliding Window Attention
For local layers, I implemented **Sliding Window Attention (SWA)** to reduce the computational complexity from $O(N^2)$ to $O(N \times W)$, where $W$ is the window size:
$$A_{ij} = \begin{cases} \text{score}(i, j) & \text{if } 0 \le i - j \le W \\ -\infty & \text{otherwise} \end{cases}$$

## 3. The Power of Constraints: Results

Using a **1B parameter scale-down** of Gemma 3, the training and evaluation results validate the "Bonsai" approach:

| Metric | Step 0 | Step 99,000 |
| :--- | :--- | :--- |
| **Validation Loss** | 10.99 | **3.8147** |
| **Perplexity (PPL)** | ~60000 | **45.3633** |

### Zero-Shot Benchmarks (`lm-eval`)
The model was evaluated using the **LM-Evaluation-Harness** to track real-world reasoning and knowledge:

| Task | Metric | Bonsai-LLM | Random Baseline |
| :--- | :--- | :--- | :--- |
| **ARC-Easy** | Accuracy | **41.20%** | ~25% |
| **PIQA** | Accuracy | **57.78%** | ~50% |
| **HellaSwag** | Accuracy | **26.51%** | ~25% |

*Note: The model exhibits significant non-random reasoning in ARC and PIQA, while HellaSwag remains a challenge at this parameter scale.*

## 4. Modernizing the MLP

The model utilizes **Grouped Query Attention (GQA)** for faster inference and a **SwiGLU-style MLP** for increased capacity:
$$\text{Output} = \text{DownProj}(\text{GeLU}(\text{GateProj}(x)) \otimes \text{UpProj}(x))$$
This combination ensures that the model remains efficient during both training and high-throughput serving.

## Conclusion

**BONSAI-LLM** is a reminder that the future of AI isn't just about scaling up—it's about scaling down intelligently. As we move toward on-device AI and specialized agents, the ability to craft small, efficient, and capable models will be a defining skill for the next generation of researchers.

***

*Explore the "Small LLMs Lab" on GitHub: [vishsangale/BONSAI-LLM](https://github.com/vishsangale/bonsai-llm)*
