---
title: ML System Design
date: 2021-04-28 12:00:00 -0400
categories: [ML, Systems]
tags: [system-design, architecture]
---

Designing a machine learning system is vastly different from designing a traditional software system. It requires balancing the needs of high-availability software architecture with the complexities of model training, data engineering, and performance evaluation.

## 1. Gather System Requirements

Start by defining the scope. You can't design the right system if you don't know who it's for.
- **Scale:** How many users? (e.g., 10M DAU)
- **Platform:** Web, mobile, or both?
- **Latency:** Is this real-time (e.g., ad ranking, search) or batch (e.g., weekly email)?
- **Throughput:** How many requests per second (RPS)?
- **Objectives:** What is the core business objective? (e.g., CTR, user retention, revenue)

## 2. High-Level Design

Define the core building blocks:
- **Data Source:** Where is the raw data? (e.g., user events, logs)
- **Data Storage:** SQL, NoSQL, or a data lake like S3?
- **Feature Store:** A centralized location for feature engineering and retrieval.
- **Model Service:** How will the model be served? (e.g., FastAPI, TensorFlow Serving)
- **Monitoring & Logging:** How will we track performance and catch errors?

## 3. Data Deep-Dive

This is often the most critical part of an ML system:
- **Preprocessing:** Handling missing values, normalization, and encoding.
- **Feature Engineering:** Creating derived features (e.g., user click history in the last 10 minutes).
- **Sampling Strategy:** How will we handle class imbalance?
- **Data Drift:** How will the system react when the underlying data distribution changes?

## 4. ML Algorithm Choice

Select the right model for the job:
- **Candidate Generation:** Fast, simple models (e.g., Collaborative Filtering, Approximate Nearest Neighbors).
- **Ranking:** Complex, high-precision models (e.g., Deep Learning, Gradient Boosted Trees).
- **Online vs. Offline:** Will the model learn in real-time or from static datasets?

## 5. Evaluation & Experimentation

- **Offline Metrics:** RMSE, AUC-ROC, Precision/Recall, Log-Loss.
- **Online Metrics:** CTR, Conversion Rate, Session Length.
- **A/B Testing:** How will we roll out the new model? (e.g., 5% traffic vs. 95% traffic)

## 6. Deployment & Monitoring

- **Deployment Strategy:** Canary deployments, Blue-Green deployments.
- **Monitoring:** Track for model decay, feature drift, and system latency.
- **Retraining:** Automate the retraining pipeline based on a time schedule or performance drop.

## Conclusion

A successful ML system is not just about the best model—it's about the **best data pipeline and monitoring**. Prioritize scalability and ease of iteration over complex, black-box architectures.
