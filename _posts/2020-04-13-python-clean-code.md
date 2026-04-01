---
title: "Python Clean Code"
date: 2020-04-14 18:45:13 -0400
categories: [Programming, Python]
tags: [python, clean-code]
image:
  path: /assets/img/posts/01.jpg
---

Python's philosophy emphasizes readability and simplicity. "Clean code" in Python (often called "Pythonic" code) isn't just about making it work—it's about making it expressive and easy for others to maintain.

Here are some essential patterns for writing modern, clean Python.

### 1. Use iterators instead of index-based for loops
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

### 3. Use `zip` for iterating over multiple lists
**Bad code**
```python
names = ["Vish", "John"]
scores = [95, 88]
for i in range(len(names)):
    print(names[i], scores[i])
```
**Good code**
```python
for name, score in zip(names, scores):
    print(name, score)
```

### 4. Comprehensions over raw for loops
**Bad code**
```python
squares = []
for x in range(10):
    squares.append(x * x)
```
**Good code**
```python
squares = [x * x for x in range(10)]
# Also works for dictionaries:
sq_dict = {x: x * x for x in range(10)}
```

### 5. Use `Counter` for counting elements
**Bad code**
```python
items = [1, 2, 1, 3, 2, 1]
d = {}
for item in items:
    d[item] = d.get(item, 0) + 1
```
**Good code**
```python
from collections import Counter
counts = Counter([1, 2, 1, 3, 2, 1])
```

### 6. Modern String Formatting (F-Strings)
**Bad code**
```python
name = "Vish"
print("Hello, {}".format(name))
```
**Good code (Python 3.6+)**
```python
print(f"Hello, {name}")
```

### 7. Type Hinting for Clarity
**Bad code**
```python
def get_user_ids(users):
    return [u.id for u in users]
```
**Good code (Python 3.5+)**
```python
from typing import List

def get_user_ids(users: List[User]) -> List[int]:
    return [u.id for u in users]
```

### 8. Use `pathlib` for File Systems
**Bad code**
```python
import os
path = os.path.join("data", "results.csv")
```
**Good code (Python 3.4+)**
```python
from pathlib import Path
path = Path("data") / "results.csv"
```

### 9. The Walrus Operator (Assignment Expressions)
**Good code (Python 3.8+)**
```python
if (n := len(items)) > 10:
    print(f"Too many items: {n}")
```

### 10. `dataclasses` for Data Containers
**Good code (Python 3.7+)**
```python
from dataclasses import dataclass

@dataclass
class Profile:
    id: int
    username: str
    email: str
```

Writing clean code is a continuous journey. These patterns ensure your code is not just functional, but elegant and idiomatic.
