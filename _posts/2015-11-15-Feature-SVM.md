---
layout:   post
title:    Feature Selection using L1-SVM and RFE (Recursive Feature Extraction)-SVM
date:     2015-11-15
project:  true
comments: true
---

The L1-SVM is an SVM that uses the L1 norm as the regularization term, which leads to very sparse solutions, and can therefore be used to perform feature selection. Compared the accuracy of L1 SVM, L2 SVM trained on the features selected by the L1 SVM, L2 SVM trained on all the features, L2 SVM that uses RFE (with an L2-SVM) to select relevant features. Computed the accuracy of a Linear L2 SVM as a function of the number of selected features on the leukemia and Arcene data sets using feature selection methods like The Golub score, L1-SVM feature selection using subsamples and RFE-SVM.
