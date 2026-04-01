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
The project prioritizes "high-signal" data over raw volume. By using a 10B token sample of **FineWeb-Edu**, my implementation achieved a validation perplexity of **~45.36** within 100k steps. This demonstrated that a smaller model trained on curated data can outperform a larger model trained on "dirty" web crawls.

## 2. Implementing Gemma 3 from Scratch

The repository features a from-scratch implementation of the **Gemma 3** architecture. By rebuilding the model, I was able to incorporate several performance-driven features:
- **Gradient Checkpointing:** Trading compute for memory to train larger models on consumer-grade GPUs.
- **LM-Evaluation-Harness Integration:** Native support for benchmarks like ARC-Easy, PIQA, and HellaSwag to track zero-shot performance in real-time during training.
- **Modernized Transformer Blocks:** Incorporating **SwiGLU** and **RoPE** for improved generalization and architectural stability.

## 3. The Power of Constraints

A key "scientist" insight from this project is that constraints lead to better design. When you can't rely on "brute force" compute, you're forced to deeply understand the nuances of the training dynamic—how hyperparameter choices like batch size and gradient accumulation steps affect the final model quality.

## Conclusion

**BONSAI-LLM** is a reminder that the future of AI isn't just about scaling up—it's about scaling down intelligently. As we move toward on-device AI and specialized agents, the ability to craft small, efficient, and capable models will be a defining skill for the next generation of researchers.

***

*Explore the "Small LLMs Lab" on GitHub: [vishsangale/BONSAI-LLM](https://github.com/vishsangale/bonsai-llm)*
