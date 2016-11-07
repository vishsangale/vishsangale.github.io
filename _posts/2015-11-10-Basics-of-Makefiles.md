---
layout: post
title: Basics of Makefiles
date: 2015-11-10
comments: true
---

As number of source files increases in your project, compiling it can be cumbersome job when you are giving compiling command each time through command line. Now makefiles will do your job very easy and you can concentrate on your project. Below is the basic makefile structure, we will study each element of it later in this post.

{% highlight make linenos %}
#Compiler
CXX:=g++
#Preprocessor flags
CPPFLAGS:=
#Compiler flags
CFLAGS:=
#Target architecture for 64 bit it should be linux64 and 32 bit linux
TARGET_ARCH:= linux64

.PHONY:all
all:main
	
main:
	$(CC) main.cpp hello.cpp -o main

.PHONY:clean
clean:
	$(RM) *.o main

{% endhighlight %}

When we say make from command line it will for search makefile in your current folder and will execute first command in a makefile. In above example all is the first command. Basic structure of a command can be seen as follows, where left part of the colon[:] is called as target, right side of the colon are dependencies if there are any. Next line of it should start with a tab, if tab is missing rule won't be executed. And after tab whatever you want run is written which is called as a rule. More than one rule can be executed for given target. In above code 'CC' and 'RM' are two variables, those are defined above and used below in make rules. Rule names which do not exist on the file system should be '.PHONY'.

{% highlight make linenos %}

target: dependency
[tab] rule

{% endhighlight %}

If your default makefile name is not 'makefile' or 'Makefile' then you need to run following command to run your makefile.

{% highlight make linenos %}
make -f youtmakefilename
{% endhighlight %}