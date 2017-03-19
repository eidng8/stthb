/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

#!/usr/bin/env node

// Save hook under `project-root/hooks/before_prepare/`
// https://gist.github.com/ohh2ahh/f35ff6e0d9f8b4268cdb
// Don't forget to install xml2js using npm
// `$ npm install xml2js`

const fs = require('fs');
const xml2js = require('xml2js');
const packageJson = require('../../package.json');

// Read config.xml
fs.readFile('config.xml', 'utf8', (err, data) => {
  if(err) {
    console.log(err);

    return;
  }

  // Parse XML to JS Obj
  xml2js.parseString(data, (parseErr, result) => {
    if(parseErr) {
      console.log(parseErr);

      return;
    }
    // Get JS Obj
    const obj = result;
    obj.widget.$.version = packageJson.version;
    // console.log(obj);
    // Build XML from JS Obj
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(obj);

    // Write config.xml
    fs.writeFile('config.xml', xml, writeErr => {
      if(writeErr) {
        console.log(writeErr);
      }

      // console.log('Build number successfully incremented');
    });

  });
});
