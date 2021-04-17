---
layout: post
title: "Python Clean Code"
subtitle: "How to write pythonic code"
date: 2020-04-14 18:45:13 -0400
background: '/img/posts/01.jpg'
tags: python
---

Some Python clean code examples.

### 1. Use iterators instead of index based for loops
**Bad code**
```python
items = [1, 3, 5]
for i in range(len(items)):
    print(items[i])
```
**Good code**
```python
items = [1, 3, 5]
for item in items:
    print(item)
```


### 2. Enumerate if you want the index
**Bad code**
```python
items = [1, 3, 5]
for i in range(len(items)):
    print(i, items[i])
```
**Good code**
```python
items = [1, 3, 5]
for i, item in enumerate(items):
    print(i, item)
```


### 3. Uze zip for iterating over two lists of same length
**Bad code**
```python
items = [1, 3, 5]
other_items = [2, 4, 6]
for i in range(len(items)):
    print(items[i], other_items[i])
```
**Good code**
```python
items = [1, 3, 5]
other_items = [2, 4, 6]

for item, other_item in zip(items, other_items):
    print(item, other_item)
```


### 4. List comprehension over raw for loops
**Bad code**
```python
items = [1, 3, 5]
other_items = []
for item in items:
    other_items.append(item * item)
```
**Good code**
```python
items = [1, 3, 5]
other_items = [item * item for item in items]
```

### 5. Dictionary comprehension
**Bad code**
```python
items = [1, 3, 5]
items_dict = {}
for i, item in enumerate(items):
    items_dict[i] = item
```
**Good code**
```python
items = [1, 3, 5]
items_dict = {i:item for i, item in enumerate(items)}
```

### 6. Use Counter instead of dict for counting elements
**Bad code**
```python
items = [1, 2, 4, 2, 3, 5, 3, 1, 2, 3, 5, 6, 4]
d = dict()
for item in items:
    if item not in d:
        d[item] = 1
    else:
        d[item] += 1
```
**Good code**
```python
from collections import Counter
items = [1, 2, 4, 2, 3, 5, 3, 1, 2, 3, 5, 6, 4]
d = Counter()
for item in items:
    d[item] += 1
```

**Better code**
```python
from collections import Counter
items = [1, 2, 4, 2, 3, 5, 3, 1, 2, 3, 5, 6, 4]
d = Counter(items)
```

### 7. Use context managers
**Bad code**
```python
f = open("some_file")
data = f.read()
f.close()
```
**Good code**
```python
with open("some_file") as f:
    data = f.read()
```
