[![Netlify Status](https://api.netlify.com/api/v1/badges/8175427a-59d7-4a73-8be3-70d1e5a255b5/deploy-status)](https://app.netlify.com/sites/hamburg-stefanimhoff-de/deploys)
[![Live](https://img.shields.io/badge/live-hamburg.stefanimhoff.de-green.svg)](https://hamburg.stefanimhoff.de/)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)
![GitHub tag](https://img.shields.io/github/tag/kogakure/website-hugo-hamburg.stefanimhoff.de.svg)

# hamburg.stefanimhoff.de

This is the source of my Hamburg [travel blog] build with [Hugo] and [Gulp.js].

## Installation

You will need [Hugo] to run this website (e. g. with Homebrew):

```bash
$ brew install hugo
```

You will also need [Node.js] to run the Gulp tasks and build process:

``` {.bash}
$ git clone https://github.com/creationix/nvm.git ~/.nvm
$ cd ~/.nvm
$ git checkout `git describe --abbrev=0 --tags`
$ nvm install 6.3.1
```

I recommend using \[Yarn\]\[yarn\], otherwise replace all occurrences of `yarn` with `npm`.

After cloning the repository run:

```bash
$ yarn install
```

## Tasks

These tasks are provided:

```bash
$ yarn start             # Run development server and create development build
$ yarn run build         # Create production build
$ yarn run build-preview # Create preview build
$ yarn run build-branch  # Create branch build
$ yarn run build-dev     # Create development build
$ yarn run svg           # Create SVG sprite from single SVG files
$ yarn run crunch        # Minimize all images
$ yarn run loadcss       # Copy loadCSS JavaScript to project
$ yarn run pagespeed     # Perform PageSpeed Insights against live website
$ yarn run lint          # Check JavaScript and CSS for errors
$ yarn run lint-js       # Check JavaScript for errors
$ yarn run lint-css      # Check CSS for errors
```

## Licence

All content is copyrighted by [Stefan Imhoff] unless otherwise stated. Feel free to learn from the source code and reuse code for your projects. The only thing which is not allowed is the usage of my design (the unique combination of layout, fonts, images).

In easier words: **This is not a free theme**. Learn from it. Remix. Reuse. Build your own stuff.

  [travel blog]: https://hamburg.stefanimhoff.de/
  [Hugo]: http://gohugo.io/
  [Gulp.js]: http://gulpjs.com/
  [Node.js]: http://nodejs.org/
  [Stefan Imhoff]: http://stefanimhoff.de
