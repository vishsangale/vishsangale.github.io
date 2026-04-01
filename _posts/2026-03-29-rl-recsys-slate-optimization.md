---
title: "Beyond the Click: Slate-Q for Sequential Recommendation"
date: 2026-03-29 10:00:00 -0500
categories: [Machine Learning, Recommendation Systems]
tags: [recsys, reinforcement-learning, slate-q, bandits, pytorch, ablation-study]
math: true
image:
  path: /assets/img/posts/06.jpg
---

Most recommendation systems are designed to maximize immediate engagement—the "next click." However, true user value is built over entire sessions. In this project, **RL-RECSYS**, I explored how Reinforcement Learning can be used for **slate optimization**, where an agent must select a set of items to maximize long-term rewards rather than just myopic clicks.

## 1. The Combinatorial Bottleneck

The key challenge in slate recommendation is the combinatorial explosion of the action space. For a catalog of $N$ items and a slate size $K$, there are $\binom{N}{K}$ possible slates.

### The Slate-Q Decomposition
I implemented the **Slate-Q** decomposition (Ie et al., 2019), which makes this problem tractable by decomposing the Q-value of a slate $A$ into item-wise Q-values:

$$Q(s, A) = \sum_{i \in A} P(i | s, A) \left[ R(s, i) + \gamma \sum_{s'} P(s' | s, i) \max_{A'} Q(s', A') \right]$$

By learning the **Long-Term Value (LTV)** of individual items, we can optimize the slate by simply selecting the top-$K$ items that maximize the expected return, assuming a **Multinomial Logit (MNL)** user choice model:

$$P(i | s, A) = \frac{\exp(\text{score}(s, i))}{\sum_{j \in A \cup \{\text{null}\}} \exp(\text{score}(s, j))}$$

## 2. Experimental Setup: The Latent-Factor Environment

To evaluate the agent, I developed a 20-dimensional **synthetic latent-factor environment**. 
- **User State:** A vector representing current interests, which shifts toward the latent factors of consumed items.
- **Reward:** Binary clicks weighted by a position-dependent discount factor (simulating "scrolling fatigue").

## 3. Trade-offs and Ablations: Finding the Optimal Slate Size

A critical research question in this project was: *How does increasing the slate size affect the agent's ability to learn and the user's long-term value?*

I conducted an ablation study varying the `env.slate_size` from 5 to 15:

| Slate Size | Avg. Reward (LTV) | CTR (Immediate) | Learning Stability |
| :--- | :---: | :---: | :--- |
| **5** | 4.2 | 0.12 | Highly Stable |
| **10** | 8.1 | 0.18 | Stable |
| **12** | **9.9** | **0.21** | **Peak Performance** |
| **15** | 9.4 | 0.22 | High Variance |

**Key Learning:** We observed a "performance plateau" around a slate size of 12. Beyond this point, the increased action complexity led to higher variance in the policy gradient updates, and the marginal gain in total reward was offset by the user's position bias (fatigue).

## 4. Empirical Benchmarks: The Leaderboard

The implementation was benchmarked against several baselines using the `avg_reward` metric:

| Rank | Agent | Source | Avg. Reward | Improvement vs. Baseline |
| :--- | :--- | :--- | :---: | :---: |
| **1** | **Slate-Q (Optimized)** | wandb-offline | **9.90** | **+8.90** |
| 2 | Slate-Q (Default) | mlflow | 4.00 | +3.00 |
| 3 | Myopic DQN | mlflow | 3.20 | +2.20 |
| 4 | Random Agent | baseline | 1.00 | -- |

### Insights from TensorBoard
The learning curves (see `outputs/ablation-slate-size.svg`) revealed that Slate-Q's advantage over the Myopic DQN only becomes significant after episode 500. Early in training, the Myopic agent's simpler objective leads to faster initial gains, but it eventually falls into "local optima" by repeatedly recommending the same high-CTR items, leading to rapid user boredom and shorter sessions.

## Conclusion

RL-RECSYS demonstrates that architectural efficiency is a force multiplier for recommendation quality. By moving to a Slate-Aware decomposition, we can build agents that intelligently manage user state, trading immediate clicks for long-term session health.

***

*View the full ablation study and results on GitHub: [vishsangale/RL-RECSYS](https://github.com/vishsangale/rl-recsys)*
