---
layout: post
title: Basics of Makefiles
---

As number of source files increases in your project, compiling it can be cumbersome job when you are giving compiling command each time through command line. Now makefiles will do your job very easy and you can concentrate on your project. Below is the basic makefile structure, we will study each element of it later in this post.

{% highlight make linenos %}
CC=g++

all:
	$(CC) main.cpp -o output

{% endhighlight %}
