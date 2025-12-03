
all: setup start

setup:
	bundler install
	gem install -n ~/.local/bin jekyll --user-install

build:
	bundle exec jekyll build

start:
	bundle exec jekyll serve
