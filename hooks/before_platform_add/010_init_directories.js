#!/usr/bin/env node

/**
 * On a fresh clone, the local platforms/ and plugins/ directories will be
 * missing, so ensure they get created before the first platform is added.
 */
const fs = require('fs');
const path = require('path');

const platformsDir = path.resolve(__dirname, '../../platforms');
const pluginsDir = path.resolve(__dirname, '../../plugins');

try {
  fs.mkdirSync(platformsDir, err => {
    if(err) {
      console.error(err);
    }
  });
} catch(ex) {
  console.error(ex);
}

try {
  fs.mkdirSync(pluginsDir, err => {
    if(err) {
      console.error(err);
    }
  });
} catch(ex) {
  console.error(ex);
}
