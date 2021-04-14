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
