---
title: "Modernizing GPT-2: A 3.1x Throughput Leap with 2025 Optimizations"
date: 2025-12-21 10:00:00 -0500
categories: [Machine Learning, LLMs]
tags: [gpt-2, pytorch, transformers, optimization, cuda]
math: true
image:
  path: /assets/img/posts/gpt2-modernization.png
---

The original GPT-2 architecture, released in 2019, remains the bedrock of modern NLP. However, the "standard" recipe for training Transformers has shifted dramatically. In this project, I rebuilt the GPT-2 (124M) architecture from scratch, incorporating modern improvements like **RoPE**, **RMSNorm**, and **SwiGLU**, while optimizing the training pipeline for 2025-era hardware.

The result? A **3.1x increase in throughput**—from ~31,000 to over **96,000 tokens per second**—on a single 16GB GPU.

## 1. Architectural Modernization: Stability and Scaling

Training a model in 2025 with 2019 architectural choices is leaving performance and stability on the table. My implementation introduces several "state-of-the-art" flags:

### RoPE (Rotary Positional Embeddings)
Absolute learned positional embeddings (the 2019 standard) often fail to generalize to sequences longer than those seen during training. By implementing **RoPE**, the model rotates the query ($q$) and key ($k$) vectors based on their position $m$:
$$f_q(x_m, m) = \begin{pmatrix} \cos m\theta & -\sin m\theta \\ \sin m\theta & \cos m\theta \end{pmatrix} \begin{pmatrix} x_{m, 2i} \\ x_{m, 2i+1} \end{pmatrix}$$
This leverages relative positioning, improving the attention mechanism's ability to capture long-range dependencies.

### RMSNorm and SwiGLU
I replaced LayerNorm with **RMSNorm** to simplify the computation (removing mean-centering) and improve training stability:
$$y = \frac{x}{\sqrt{\text{mean}(x^2) + \epsilon}} \odot \gamma$$
Additionally, I swapped the GeLU activation for **SwiGLU**:
$$\text{SwiGLU}(x) = \text{SiLU}(xW) \otimes xV$$
My ablation tests on **FineWeb-Edu** showed that while SwiGLU increases the FLOPs per step, it leads to faster convergence and a lower final validation loss (4.04 vs. 4.42 for the baseline).

## 2. Throughput Optimization Path: Pushing 16GB VRAM

The 96k tokens/sec throughput was achieved through a systematic "hardware-aware" optimization path. On a single 16GB GPU, a naive implementation of GPT-2 124M often suffers from Out-of-Memory (OOM) errors even at moderate batch sizes.

| Optimization Level | Batch Size | Throughput (tok/sec) | Speedup |
| :--- | :---: | :---: | :---: |
| **Baseline (2019 Recipe)** | 4 | ~31,000 | 1.0x |
| **+ Fused AdamW & TF32** | 4 | ~63,500 | 2.05x |
| **+ Flash Attention 2** | 8 | ~68,600 | 2.21x |
| **+ torch.compile & BF16** | **16** | **~96,000+** | **3.10x** |

### Implementation "Craft": TF32 and Vocabulary Padding
A subtle but critical optimization involved enabling TensorFloat-32 (TF32) for matmuls and padding the vocabulary to **50,304** (the nearest multiple of 64). 
```python
# Enabling TF32 for 2025 hardware
torch.backends.cuda.matmul.allow_tf32 = True 
torch.backends.cudnn.allow_tf32 = True 
```
This ensures GPU tile alignment during the final linear layer, maximizing Tensor Core utilization and providing a significant speedup in the logit calculation without sacrificing precision like pure FP16 would.

## 3. Results: Tiny Shakespeare vs. FineWeb

An interesting "scientist" insight discovered during training: when testing on a small dataset like **Tiny Shakespeare**, the modernized architecture (with SwiGLU and RoPE) overfit significantly faster.

| Dataset | Experiment | Step | Train Loss | Val Loss |
| :--- | :--- | :--- | :--- | :--- |
| **Tiny Shakespeare**| Vanilla | 1000 | 0.0707 | **7.7550** |
| **Tiny Shakespeare**| Modernized | 1000 | **0.0296** | 8.4237 |
| **FineWeb-Edu** | Vanilla | 2000 | 4.2383 | 4.4223 |
| **FineWeb-Edu** | Modernized | 2000 | **3.7576** | **4.0407** |

On a 10B token sample of **FineWeb**, the modernized model achieved an **~8.6% improvement** in validation loss. The learning curves confirm that architectural efficiency is a force multiplier for data scale.

### Qualitative Check: Generated Samples
Starting with *"The internet is"*:
- **Vanilla Model:** *"The internet is usually done when the user's homeware is allowed..."* (Contains minor hallucinations).
- **Modernized Model:** *"The internet is the key to the growth of a business and the growth of his business..."* (Highly coherent and grammatically perfect).

## Conclusion

Rebuilding GPT-2 in 2025 proves that even with the same parameter count, a model's performance is deeply tied to the "craft" of its implementation. Software optimizations (`torch.compile`) and more efficient architectures (SwiGLU) have effectively tripled the power of our existing hardware.

***

*You can find the full source code and benchmarks on my GitHub: [vishsangale/GPT-2](https://github.com/vishsangale/GPT-2)*
