#!/usr/bin/env node

/**
 * After prepare, files are copied to the platforms/ios and platforms/android
 * folders. Lets clean up some of those files that parent needed with this hook.
 */
const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(removePath) {
  if (fs.existsSync(removePath)) {
    fs.readdirSync(removePath).forEach(file => {
      const curPath = path.join(removePath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(removePath);
  }
}

const iosPlatformsDir = path.resolve(
  __dirname, '../../platforms/ios/www/lib/ionic/scss');
const androidPlatformsDir = path.resolve(
  __dirname, '../../platforms/android/assets/www/lib/ionic/scss');

deleteFolderRecursive(iosPlatformsDir);
deleteFolderRecursive(androidPlatformsDir);
