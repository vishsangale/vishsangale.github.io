---
layout: post
title: How to write a Pythonic code!
date: 2016-11-06
comments: true
---

Why to write a code in Pythonic way?

* Highly readable(Almost looks like Pseudo-code)
* Probably Faster
* Easy to write and understand


Below are some tricks, using which you can make your code _Pythonic_.
This list may not be complete, I will keep updating whenever I find 
something _Pythonic_. _Pythonic_ is vague concept, it is not hard 
defined.

* Traverse a list
```python
l = ['a', 'c', 'b', 'e', 'f']
for i in range(length(l)):
    print l[i]
```

In above code, we are traversing a list using built-in `range` function,
which is not most _Pythonic_ way to do. You can traverse a list like
below which is more readable and easy to understand.
 
```python
l = ['a', 'c', 'b', 'e', 'f']
for item in l:
    print item
```

* Unpacking a list

It is possible that, in your logic you may need both index and an 
element of the list to perform some operation.
```python
l = ['a', 'c', 'b', 'e', 'f']
for i in range(length(l)):
    print i, l[i]
```

We can write above code in _Pythonic_ way as follows using `enumerate`,

```
l = ['a', 'c', 'b', 'e', 'f']
for index, item in enumerate(l):
    print index, item
```

* Swap elements

Most of us have already learned `C`, `C++`, `Java` before learning 
Python. For swapping two elements, we use `temp` variable like below,

```python
   temp = a
   a = b
   b = temp
```

In Python, we can simply do swap like below without using `temp` variable
just using tuple since tuples are immutable data types in Python,

```python
    a, b = b, a
```

* Search an item in a list

```python
def is_item_present(l, search):
    for i in range(len(l)):
        if search == l[i]:
            return True
```

or

```python
def is_item_present(l, search):
    for item in l:
        if search == item:
            return True
```

In more _Pythonic_ way, you can just write,

```python
def is_item_present(l, search):
    return search in l
```

In above examples, you can use any collection data type of Python like
`list`, `set`, `dictionary` etc.



