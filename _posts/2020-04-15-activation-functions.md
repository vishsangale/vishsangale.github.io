---
title: Activation Functions
date: 2020-04-15 12:00:00 -0400
categories: [ML]
tags: [deep-learning, theory]
math: true
---

Activation functions are the mathematical "gates" that decide whether a neuron should fire or stay dormant. They introduce non-linearity into a neural network, allowing it to learn complex, non-linear relationships in data.

## Sigmoid
- **Range:** $[0, 1]$
- **Pros:** Clear probabilistic interpretation.
- **Cons:**
    - **Saturating Gradients:** For large positive or negative inputs, the gradient is almost zero, leading to the vanishing gradient problem.
    - **Output not Zero-Centered:** This causes the gradient updates to zip-zag during backpropagation, making training slower.
    - **Compute-Intensive:** `exp()` is relatively slow compared to linear operations.

## Tanh (Hyperbolic Tangent)
- **Range:** $[-1, 1]$
- **Pros:**
    - **Zero-Centered:** Resolves the output centering issue found in Sigmoid.
- **Cons:**
    - **Saturating Gradients:** Still suffers from the vanishing gradient problem in the extreme regions.

## ReLU (Rectified Linear Unit)
- **Range:** $[0, \infty)$
- **Formula:** $f(x) = \max(0, x)$
- **Pros:**
    - **Does Not Saturate:** Gradients are constant ($1.0$) in the positive region.
    - **Very Fast:** Only requires a simple thresholding operation.
    - **Sparsity:** Promotes sparse activations (some neurons stay inactive).
- **Cons:**
    - **Dead ReLU Problem:** If a large gradient flows through a ReLU neuron such that the weight update causes it to never activate again, the neuron is effectively "dead" and provides zero gradient to downstream layers.

## Leaky ReLU
- **Range:** $(-\infty, \infty)$
- **Formula:** $f(x) = \max(\alpha x, x)$ where $\alpha$ is a small constant (e.g., 0.01).
- **Pros:** Solves the "Dead ReLU" problem by ensuring a small, non-zero gradient even for negative inputs.

## ELU (Exponential Linear Unit)
- **Range:** $(-\alpha, \infty)$
- **Pros:**
    - All benefits of ReLU and Leaky ReLU.
    - Has a smoother output that is closer to zero-centered than ReLU.

## Modern Functions: Swish and GELU
- **Swish:** $f(x) = x \cdot \sigma(\beta x)$. Developed by Google, it's a smooth, non-monotonic function that has been shown to outperform ReLU in many deep networks.
- **GELU (Gaussian Error Linear Unit):** $f(x) = x\Phi(x)$. This is the standard in modern Transformer architectures (like GPT and BERT). It weights the input by its probability under a Gaussian distribution.

## Which one should I use?
1. **Always start with ReLU.** It's the standard for a reason: it's fast and effective.
2. **If you have "Dead Neurons":** Try Leaky ReLU or ELU.
3. **For Transformers and SOTA LLMs:** Use GELU or Swish.
4. **Never use Sigmoid or Tanh in hidden layers** unless you have a very specific reason. Save them for output layers (Sigmoid for binary classification, Tanh for GANs).
