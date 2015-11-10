#Simple makefile for using git


add:
	git add --all

commit:
	git commit -m "$(m)"

push:
	git push -u origin master
