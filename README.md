# frontend-boilerplate

Ease your development pains with frontend-boilerplate.

Just copy the entire directory and rename as needed.

If you're cloning from github, be sure to have [Node.js](http://nodejs.org/download/) installed. Then:

```shell

# Shortcut

# Install dependencies
$ npm run build
# Blast off!
$ npm run start


# What's actually happening

# Install dependencies from the NPM registry (includes Bower)
$ npm install

# Install sass-bootstrap
$ bower install

# Blast off!
$ gulp
```

## Stack
* clientapp: JS application code
* node_modules: npm-sourced dependencies
* public: Where all publicly exported code will live
* styles: SASS stylesheets (compiles to CSS)
* gulp & gulpfile.js: Build-related config and tasks
* templates: Jade template files (compiles to HTML)
* .gitignore: config that instructs git what files to exclude
* .jshintrc: js-hint style rules
* index.html: the "home" page ('/')
* package.json: boilerplate info
