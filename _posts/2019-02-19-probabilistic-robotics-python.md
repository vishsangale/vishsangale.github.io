---
title: "Uncertainty in Motion: Probabilistic Robotics from Textbook to Code"
date: 2019-02-19 11:00:00 -0500
categories: [Robotics, Machine Learning]
tags: [probabilistic-robotics, python, bayesian-inference, filters]
math: true
image:
  path: /assets/img/posts/03.jpg
---

Probabilistic methods are the foundation of modern robotics. Because sensors are noisy and environments are unpredictable, a robot must be able to represent and reason about its own uncertainty. In this project, **PYPROB**, I implemented core probabilistic algorithms to bridge the gap between textbook theory and functional Python code.

The project is a companion to the foundational works of Thrun, Bishop, and Murphy, providing a direct implementation of the complex mathematical frameworks that power autonomous systems.

## 1. The Filtering Problem: EKF vs. Particle Filters

At the heart of navigation is the estimation problem: given a sequence of noisy measurements, how do we estimate the robot's true state?

### Extended Kalman Filters (EKF) and the Joseph Form
Building on my earlier research, I implemented the **Extended Kalman Filter (EKF)**. A key insight in the implementation was using the **Joseph form** for the covariance update ($P_k = (I - K_k H_k) P_{k-1} (I - K_k H_k)^T + K_k R_k K_k^T$). This ensured the covariance matrix remained symmetric and positive definite, significantly improving numerical stability during long observation runs.

### Particle Filters (Monte Carlo Localization)
For situations where the belief is non-Gaussian—such as the "kidnapped robot" problem—I implemented **Particle Filters**. The implementation uses importance sampling to maintain a cloud of hypotheses. One "human" insight during the development was the critical importance of the **re-sampling strategy**; without a low-variance sampler, the particle cloud would often collapse into a single point, causing the filter to diverge when the robot encountered similar-looking landmarks.

## 2. Bayesian Inference in Pattern Recognition

Beyond robotics, the library includes several statistical learning methods from Bishop’s *Pattern Recognition and Machine Learning*:

### Bayesian Linear Regression
Unlike standard regression, this implementation provides a full **posterior distribution** over the model parameters. This allows for a more rigorous measure of the model's confidence in its predictions, which is critical for safety-first robotic planning.

### Expectation-Maximization (EM)
The library also includes an **EM algorithm** for Gaussian Mixture Models (GMMs). This is used for clustering latent features in a robot's environment, such as identifying different types of obstacles from raw point clouds.

## 3. Why Probabilistic?

In robotics, a deterministic view is often a recipe for failure. If a robot is "100% certain" of its position but its sensors say otherwise, the resulting behavior can be catastrophic. By maintaining a **belief**—a probability distribution over all possible states—we allow the robot to make more robust decisions under the pressure of real-world noise.

## Conclusion

**PYPROB** was a deep dive into the statistical mechanics of intelligence. It taught me that the "magic" of autonomous systems isn't in perfect sensors, but in the elegant mathematical frameworks that allow us to make sense of the noise.

***

*Explore the source code on GitHub: [vishsangale/PYPROB](https://github.com/vishsangale/pyprob)*
