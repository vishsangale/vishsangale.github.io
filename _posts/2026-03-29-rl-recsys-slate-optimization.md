---
title: "Beyond the Click: Slate-Q for Sequential Recommendation"
date: 2026-03-29 10:00:00 -0500
categories: [Machine Learning, Recommendation Systems]
tags: [recsys, reinforcement-learning, slate-q, bandits, pytorch]
math: true
image:
  path: /assets/img/posts/06.jpg
---

Most recommendation systems are designed to maximize immediate engagement—the "next click." However, true user value is built over entire sessions. In this project, **RL-RECSYS**, I explored how Reinforcement Learning can be used for **slate optimization**, where an agent must select a set of items to maximize long-term rewards rather than just myopic clicks.

## 1. Recommendation as a Sequential Decision Problem

The key challenge in slate recommendation is the combinatorial explosion of the action space. If you have 10,000 items and a slate size of 10, there are $\binom{10000}{10}$ possible slates—far too many to evaluate with a standard Q-learning agent.

### The Slate-Q Decomposition
I implemented the **Slate-Q** decomposition (Ie et al., 2019), which addresses this by decomposing the Q-value of a slate $A$ into item-wise Q-values:
$$Q(s, A) = \sum_{i \in A} P(i | s, A) \bar{Q}(s, i)$$
Where:
- $\bar{Q}(s, i)$ is the expected **Long-Term Value (LTV)** of item $i$.
- $P(i | s, A)$ is the **User Choice Model**, typically implemented as a Multinomial Logit (MNL).

By learning $\bar{Q}(s, i)$ for individual items, the optimization of the entire slate becomes a tractable linear program.

## 2. Simulation in a Latent-Factor Environment

To evaluate Slate-Q, I developed a **synthetic latent-factor environment** (20-dimensional vectors) where user preferences evolve based on their consumption history. This environment simulates complex user dynamics like "boredom" or "variety-seeking," providing a rigorous testbed for long-term reward maximization.

### Results: Slate-Q vs. Myopic DQN
My experiments showed that while a myopic DQN can achieve higher CTR in the first few steps of a session, **Slate-Q** consistently yields a higher **Cumulative Click-Sum** and **NDCG@10** over long sessions. By intelligently sacrificing a high-probability immediate click for an item that replenishes the user's "time budget," the Slate-Q agent sustains engagement for up to 40% longer.

## 3. Industrial Scalability

By leveraging **Hydra** for hierarchical configuration and **Weights & Biases (W&B)** for experiment tracking, the repository is built for professional-scale research. The modular design allows for easily swapping different reward models (e.g., Click-Sum vs. Watch-Time) and user choice models, making it a flexible platform for exploring the "next frontier" of RecSys.

## Conclusion

RL-RECSYS represents a move away from "short-termism" in recommendation design. By framing recommendation as an MDP, we can build agents that truly understand and optimize for the user's long-term experience.

***

*View the research and experiments on GitHub: [vishsangale/RL-RECSYS](https://github.com/vishsangale/rl-recsys)*
