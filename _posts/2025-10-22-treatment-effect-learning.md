---
title: "Treatment Effect Learning Under Sequential Randomization"
date: 2025-10-22 09:00:00 -0500
categories: [Research, Causal Inference]
tags: [treatment-effect, experiment-design, sequential-randomization, causal-ml]
math: true
---

This research addresses the challenges of causal inference in online experiments (A/B testing) where treatment assignments are sequential.

### Core Problem:
In online settings, standard methods often fail because of **carry-over effects** and complex dependencies where a treatment in one session can affect outcomes in subsequent ones.

### Proposed Solution:
We propose a framework that combines **Meta-Learners** (specifically T-Learners) with the **G-Formula** to handle sequential conditional exchangeability. This allows for more robust measurement of cumulative and heterogeneous treatment effects at scale.

*Published on arXiv, 2025.*

[[Full Paper on arXiv]](https://arxiv.org/abs/2510.20078)
