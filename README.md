# diversemix.github.io

This site is hosted on [blog.diversemix.com](http://blog.diversemix.com)

## Things still to do

- Import code from gists
- Import code from toolbox (+remove repo)
- Import code from other stuff lying around
- Post on DDD 
- 
- Interest Posts:
  - Anatomy of God
  - Astronomy
  - Archery
  - Science 
    - Genetics
    - Organic Semiconductors
 
- People Posts:
  - communication
  - documentation
  - self organisation
  - teams I have Managed
  
- Learning Posts:
  - Rust
  - AI
  - Python 3
  - 
## Running locally

A word of warning, I thought I'd install `rbenv` to be able to control different versions of ruby on my system. However, this will take you down a complete rabbit hole of trying to make ruby compile - this was some incompatibility with openssl. YMMV 

The following assumes the use of a Debian based linux O/S, such at Ubuntu:

1. Setup ruby: `sudo apt install ruby-full` 
2. Install ruby bundler `sudo apt install ruby-bundler`
3. Install the project's dependencies from in the root folder: `bundler install`
4. You might need to install `jekyll` with: `gem install jekyll`
5. Build the site: `bundle jekyll build`
6. Serve the site locally: `bundle exec jekyll serve`

## Stylesheet Link

- [Stylesheets in theme](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/)
- Modify style in `_dirt.scss`
- To get column header changes have been made to  `_tables.scss`
  
## Minimal Mistakes remote theme starter

Click [**Use this template**](https://github.com/mmistakes/mm-github-pages-starter/generate) button above for the quickest method of getting started with the [Minimal Mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes).

Contains basic configuration to get you a site with:

- Sample posts.
- Sample top navigation.
- Sample author sidebar with social links.
- Sample footer links.
- Paginated home page.
- Archive pages for posts grouped by year, category, and tag.
- Sample about page.
- Sample 404 page.
- Site wide search.

Replace sample content with your own and [configure as necessary](https://mmistakes.github.io/minimal-mistakes/docs/configuration/).

---

### Troubleshooting

If you have a question about using Jekyll, start a discussion on the [Jekyll Forum](https://talk.jekyllrb.com/) or [StackOverflow](https://stackoverflow.com/questions/tagged/jekyll). Other resources:

- [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
- [Setting up a Jekyll site with GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Configuring GitHub Metadata](https://github.com/jekyll/github-metadata/blob/master/docs/configuration.md#configuration) to work properly when developing locally and avoid `No GitHub API authentication could be found. Some fields may be missing or have incorrect data.` warnings.
