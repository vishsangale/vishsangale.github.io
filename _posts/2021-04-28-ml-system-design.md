---
title: ML System Design
date: 2021-04-28 12:00:00 -0400
categories: [ML, Systems]
tags: [system-design, architecture]
---
## Systems Design:
* Lead the discussion
* Talk about tradeoffs of your decision, Common pitfalls, and how you would address them
* Pro-actively defend your design decisions
* Demonstrate an end to end understanding of your design (high level and details)
* Details: Touch upon storage, data flow, core data structure, data query
* Database, storage, scalability, webserver, cache, security, algorithm

## Steps to talk about
- Requirements
- High level design
- Data deep-dive
- ML Algorithm
- Evaluation
- Experimentation
- Deployment

## Gather system requirements
- Number of users to serve
- Platform Web, mobile
- Latency
- Throughput
- Objective of the system
- How to major success?


## ML Design: In addition to leading the discussion, be prepared to discuss
* Feature Engineering – Deep Dive, discuss as many features as you can think of
* Modeling- Loss Function, Optimizer, Etc
* Training Data
* Evaluation
* ML concepts YOU KNOW and how to apply them


## Data
- Sources of Data
- Distribution in Data
- Size of Data
- How data is labeled
- How data is stored
- Are images taken from same camera?
- Are images of the same size?
- Statistical analysis of data, mean var, look at the outliers, understand the data
- Look for unbalances dataset
- Normalize the input
- Data augmentation

## Training
- Multi-GPU, Multi-Server training
- Data preprocessing on multi-CPU
- Use prefetch for improving training time



## Algorithm
- Can we build heuristic/rules based simple Algorithm
- Can we use classical ML algorithms
- Why do we NN?
- What kind of NN? CNN? FCN?
- Start with simple models, validate hypothesis and training pipeline

## Evaluation
- What is the goal of the algorithm? What is it trying to optimize?
- How to define success
- Measure on unseen data, Measure on real time Distribution.
- may need to do A/B testing with current algorithm
- Bias in data, creating bias in algorithm
- Is it harmful to the society, creating more diversity issues
- Fairness of the algorithm
- Where do we want to run the algorithm? Mobile? Cloud? Multiple locations?
- Do we need to optimize for time and memory of the algorithm?
- Latency requirements?
- Online vs offline testing? A/B testing?
- Is data stored on the phone or uploaded to cloud?
- Reproducibility of model training
- Reproducibility of model inference, non-deterministic behavior from CUDA libraries

## Models in Productions
- Serving
- Multiple serving servers with load-balancer for scalability  
- Add logging of features
- Add logging of data distribution to detect shift in data

## Misc:
- Test model performance in training and in serving
- Test the determinism of the model in serving since, ML has an element of unpredictability
- Test infra independent of the model
- Log the metrics
- Log the features
- Sanity check before and after exporting the model
- How often do you want to update the model?  
- How often do you want to retrain? Reduce training and evaluation time?
- Be mindful of change in data pipeline, feature changing definition
- Privacy in ML, federated learning

## Optimize Model
- For inference time and memory, do pruning
  - Iterative pruning, remove the lowest weight per iteration
  - Mixed Precision Training


