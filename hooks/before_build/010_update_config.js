#!/usr/bin/env node

// Save hook under `project-root/hooks/before_prepare/`
// https://gist.github.com/ohh2ahh/f35ff6e0d9f8b4268cdb
// Don't forget to install xml2js using npm
// `$ npm install xml2js`

const fs = require('fs');
const xml2js = require('xml2js-es6-promise');
const packageJson = require('../../package.json');

// Read config.xml
fs.readFile('config.xml', 'utf8')
  .then(data => {
    // Parse XML to JS Obj
    xml2js.parseString(data)
          .then(result => {
            // noinspection JSUnresolvedVariable
            result.widget.$.version = packageJson.version;
            // console.log(obj);

            // Build XML from JS Obj
            const builder = new xml2js.Builder();
            const xml = builder.buildObject(result);

            // Write config.xml
            fs.writeFile('config.xml', xml)
              .then(() => console.log('Build number successfully incremented'))
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
  })
  .catch(err => console.error(err));
