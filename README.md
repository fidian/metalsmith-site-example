@fidian/metalsmith-site-example
===============================

It can be difficult when trying to set up a new site. This sample leverages several features and shows techniques for how you can build a static site of your own that uses [Metalsmith](https://metalsmith.io/) and [@fidian/metalsmith-site](https://github.com/fidian/metalsmith-site).

This repository is an example that you are free to modify and use to your heart's content. Features and files are heavily commented in order to explain what they do and how they can affect the build.


Metadata
--------

Metadata can be added through a `default-metadata.json` or `default-metadata.js`. Additionally, hooks can manipulate metadata later in the process, though it shouldn't be necessary.


Redirects
---------

Two redirects are automatically created. The first will send visitors that come in to `index.htm` and redirect them to `/`. The second changes `events.html` to `/events/`. This is defined with `redirects.json` or `redirects.js` and are automatically created when there are any redirects in the file.


Content Manipulation
--------------------

File content is modified during processing to eliminate certain Unicode characters. Likewise, a `summary` property is added for the events that contains the first paragraph of text.


Minification
------------

When running just a build (not serving the files live), the HTML, CSS, and JavaScript will be minified.


Support A Build System
----------------------

Your static content can be served through hosts like GitHub Pages. The sample GitHub Action is in `.github/workflows/` and it will run a build, then push those changes to the `gh-pages` branch in this repository.

In addition, this example also has a couple extra perks for GitHub Pages. There's a sample `CNAME` file that GitHub Pages uses when your static site is hosted under your own domain by GitHub's CDN. There's also a `.nojekyll` file that disables processing by Jekyll, saving a small amount of time when publishing the site.


PDF Generation
--------------

PDF files are created using `wkhtmltopdf`. You'll need this installed on your system for it to work. The good news is that you can hook up your build system to install and run this tool for you. There's a sample GitHub Action in `.github/workflows/` that does this.


License
-------

This repository is licensed under [The Unlicense](LICENSE). Use this however you want, but at your own responsibility.
