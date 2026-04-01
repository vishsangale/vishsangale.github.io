---
title: Activation Functions
date: 2020-04-15 12:00:00 -0400
categories: [ML]
tags: [deep-learning, theory]
---

## Sigmoid function
- Squashes number to range [0, 1]
- `sigma(x) = 1/ (1+ e^(-x))`
- Saturating firing rate of a neuron
- Saturated neurons kill the gradients
- Not zero centered
- `exp()` is a bit compute expensive

## Tanh function
- Squashes [-1, 1]
- Zero-centered
- 

## ReLU function (Rectified Linear Unit)
- Does not saturate
- Very computationally efficient
- Converges faster than `sigmoid` and `tanh`
- More biologically plausible to biological neuron
- Not zero-centered
- Killing the gradient in half of the regime

## Leaky ReLU
- Will not die in negative inputs to the activation

## Parametric ReLU
- pass parameter for negative slope

## Exponential Linear Units (ELU)
- Closer to zero mean outputs
- Negative saturation regime compared with Leaky ReLU adds some robustness to noise
- Computationally expensive `exp()`


## Maxout "Neuron"
- Generalizes ReLU and Leaky ReLU
- Linear regime, does not saturate, does not die.
