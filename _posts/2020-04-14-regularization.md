---
title: Regularization
date: 2020-04-14 12:00:00 -0400
categories: [ML]
tags: [regularization, math, machine-learning]
math: true
---

Regularization is a fundamental technique in machine learning used to prevent overfitting by penalizing the complexity of a model. By adding a regularization term to the loss function, we encourage the model to learn simpler patterns that generalize better to unseen data.

## L2 Regularization (Weight Decay)

L2 regularization, also known as Ridge regression or Weight Decay, adds the sum of the squares of the weights to the loss function:

$$L_{reg} = L_{original} + \lambda \sum w^2$$

- **Intuition:** From a Bayesian perspective, L2 regularization is equivalent to assuming a **Gaussian prior** on the weights.
- **Effect:** It penalizes large weights heavily but rarely drives them to exactly zero. This results in "weight decay," where weights are pushed toward smaller values, making the model less sensitive to individual noise in the training data.

## L1 Regularization

L1 regularization, or Lasso regression, adds the sum of the absolute values of the weights:

$$L_{reg} = L_{original} + \lambda \sum |w|$$

- **Intuition:** L1 regularization corresponds to a **Laplace prior** on the weights.
- **Effect:** Unlike L2, L1 has the unique property of producing **sparse models**. It often drives the weights of less important features to exactly zero, effectively performing automatic feature selection.

## Elastic Net (L1 + L2)

Elastic Net is a hybrid approach that combines both L1 and L2 penalties:

$$L_{reg} = L_{original} + \lambda_1 \sum |w| + \lambda_2 \sum w^2$$

- **Why use it?** It overcomes some of the limitations of Lasso, particularly when there are highly correlated features. While Lasso might randomly pick one from a group of correlated features, Elastic Net tends to include the whole group (via the L2 component) while maintaining sparsity (via the L1 component).

## Max Norm Regularization

Max Norm regularization enforces an absolute upper bound on the magnitude of the weight vector for every neuron:

$$\|w\|_2 \le c$$

- **Mechanism:** If a gradient update pushes the norm of the weight vector above the constant $c$, we project it back onto the surface of the hypersphere.
- **Benefit:** This is particularly effective in preventing "exploding gradients" in deep neural networks and works exceptionally well when combined with Dropout.

## Summary: When to use which?

- **L2:** Your default choice. It's stable and works well for most general cases.
- **L1:** Use it when you suspect only a few features are actually important and you want a sparse, interpretable model.
- **Elastic Net:** Best for complex datasets with many correlated features.
- **Max Norm:** Highly effective in deep networks, especially when using high learning rates or Dropout.
