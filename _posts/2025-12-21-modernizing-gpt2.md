---
title: "Modernizing GPT-2: A 3.1x Throughput Leap with 2025 Optimizations"
date: 2025-12-21 10:00:00 -0500
categories: [Machine Learning, LLMs]
tags: [gpt-2, pytorch, transformers, optimization, cuda]
math: true
image:
  path: /assets/img/posts/01.jpg
---

The original GPT-2 architecture, released in 2019, remains the bedrock of modern NLP. However, the "standard" recipe for training Transformers has shifted dramatically. In this project, I rebuilt the GPT-2 (124M) architecture from scratch, incorporating modern improvements like **RoPE**, **RMSNorm**, and **SwiGLU**, while optimizing the training pipeline for 2025-era hardware.

The result? A **3.1x increase in throughput**—from ~29,000 to over **92,000 tokens per second**—on a single 16GB GPU.

## 1. Architectural Modernization

Training a model in 2025 with 2019 architectural choices is leaving performance and stability on the table. My implementation introduces several "state-of-the-art" flags:

### RoPE (Rotary Positional Embeddings)
Absolute learned positional embeddings (the 2019 standard) often fail to generalize to sequences longer than those seen during training. By implementing **RoPE**, the model leverages relative positioning, improving the attention mechanism's ability to capture long-range dependencies and theoretically extending the effective context window.

### RMSNorm and SwiGLU
I replaced LayerNorm with **RMSNorm** to simplify the computation (removing mean-centering) and improve training stability. Additionally, I swapped the GeLU activation for **SwiGLU**. My ablation tests on **FineWeb-Edu** showed that while SwiGLU increases the FLOPs per step, it leads to faster convergence and a lower final validation loss (4.04 vs. 4.42 for the baseline).

## 2. Pushing the Limits of 16GB VRAM

A naive implementation of GPT-2 124M often suffers from Out-of-Memory (OOM) errors even at moderate batch sizes. The 92k tokens/sec throughput was achieved through a series of "hardware-aware" optimizations:

### Flash Attention 2
By utilizing `torch.nn.functional.scaled_dot_product_attention`, the implementation leverages **Flash Attention 2**. This avoids the $O(N^2)$ memory bottleneck by keeping the attention matrix on-chip, allowing me to increase the batch size from **4 to 16** on the same 16GB hardware without OOMing.

### Vocabulary Padding for Tensor Cores
A subtle but critical optimization: I padded the standard vocabulary to **50,304** (the nearest multiple of 64). This ensures that the GPU tiles are perfectly aligned during the final linear layer's matrix multiplication, maximizing Tensor Core utilization and providing a significant speedup in the logit calculation.

## 3. The "Small Data" Pitfall

An interesting "human" insight discovered during training: when testing on the **Tiny Shakespeare** dataset, the modernized architecture (with SwiGLU and RoPE) overfit significantly faster than the vanilla baseline. Its increased expressivity is a double-edged sword; it requires high-quality, large-scale data like **FineWeb-Edu** to truly shine. On a 10B token sample of FineWeb, the modernized model achieved an ~8.6% improvement in validation loss over the original 2019 design.

## Conclusion

Rebuilding GPT-2 in 2025 is a masterclass in how much "free" performance we've gained through software optimizations and more efficient architectures. It proves that even with the same parameter count, a model's performance is deeply tied to the "craft" of its implementation.

***

*You can find the full source code and benchmarks on my GitHub: [vishsangale/GPT-2](https://github.com/vishsangale/GPT-2)*
