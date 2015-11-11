---
layout: post
title: Basics of Makefiles
---

As number of source files increases in your project, compiling it can be cumbersome job when you are giving compiling command each time through command line. Now makefiles will do your job very easy and you can concentrate on your project. Below is the basic makefile structure, we will study each element of it later in this post.

{% highlight make linenos %}
CC=g++
RM=rm

all:
	$(CC) main.cpp -o output

clean:
	$(RM) -f *.o

{% endhighlight %}

When we say make from command line it will for search makefile in your current folder and will execute first command in a makefile. In above example all is the first command. Basic structure of a command can be seen as follows, where left part of the colon[:] is called as target, right side of the colon are dependencies if there are any. Next line of it should start with a tab, if tab is missing rule won't be executed. And after tab whatever you want run is written which is called as a rule. More than one rule can be executed for given target.

{% highlight make linenos %}

target: dependency
[tab] rule

{% endhighlight %}
