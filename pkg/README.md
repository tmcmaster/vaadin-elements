# Vaadin Components

## Build

After adding any extra Vaadin components to the package.json file, build the pika package.
```bash
./bin/build.sh
```

Commit changes, and push to the git repository.

publish the pika package: 
```bash
pika publish
```

Commit remaining changes.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
