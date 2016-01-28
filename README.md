# MWL Components

## About

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Using

MyWellzestaLife uses the [Semantic-UI](http://semantic-ui.com/) framework that provides respoonsive view and a rich widget toolset. The default theme looks great!

This repository comes pre-baked with 

* Semantic-UI
* Firebase toolbelt

Pods are enabled by default. This organizes routes and temples together. Using the pod structure is a matter of personal taste.

### API

Firebase offers web app hosting and a backend noSQL document store--MongoDB. This repository is pre-configured with all the tools needed to connect to firebase. Do the following:

* Establish a firebase account. Suggestion: use google OAuth.
* create a "new app" from your dashboard. Copy the {app-name}
* in **config/environment.js** edit the line

> firebase: 'https://{app-name}.firebaseIO.com',


* in **firebase.json** edit the line

>   "firebase": "{app-name}",

### Deploy

Deploy your app to firebase:

```
firebase deploy
```


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


