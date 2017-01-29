#!/usr/bin/env node

// Add Platform Class
// v1.0
// Automatically adds the platform class to the body tag
// after the `prepare` command. By placing the platform CSS classes
// directly in the HTML built for the platform, it speeds up
// rendering the correct layout/style for the specific platform
// instead of waiting for the JS to figure out the correct classes.

const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2];

function addPlatformBodyTag(indexPath, platform) {
  // add the platform class to the body tag
  try {
    const platformClass = `platform-${platform}`;
    const cordovaClass = 'platform-cordova platform-webview';

    let html = fs.readFileSync(indexPath, 'utf8');

    const bodyTag = findBodyTag(html);
    if(!bodyTag) {
      return;
    } // no opening body tag, something's wrong

    if(bodyTag.indexOf(platformClass) > -1) {
      return;
    } // already added

    let newBodyTag = bodyTag;

    const classAttr = findClassAttr(bodyTag);
    if(classAttr) {
      // body tag has existing class attribute, add the class name
      const endingQuote = classAttr.substring(classAttr.length - 1);
      let newClassAttr = classAttr.substring(0, classAttr.length - 1);
      newClassAttr += ` ${platformClass} ${cordovaClass}${endingQuote}`;
      newBodyTag = bodyTag.replace(classAttr, newClassAttr);
    } else {
      // add class attribute to the body tag
      newBodyTag =
        bodyTag.replace('>', ` class="${platformClass} ${cordovaClass}">`);
    }

    html = html.replace(bodyTag, newBodyTag);

    fs.writeFileSync(indexPath, html, 'utf8');

    process.stdout.write(`add to body class: ${platformClass}\n`);
  } catch(ex) {
    process.stderr.write(ex);
  }
}

function findBodyTag(html) {
  // get the body tag
  try {
    return html.match(/<body(?=[\s>])(.*?)>/gi)[0];
  } catch(ex) {
    return null;
  }
}

function findClassAttr(bodyTag) {
  // get the body tag's class attribute
  try {
    return bodyTag.match(/ class=["|'](.*?)["|']/gi)[0];
  } catch(ex) {
    return null;
  }
}

if(rootDir) {
  // go through each of the platform directories that have been prepared
  const platforms = process.env.CORDOVA_PLATFORMS
    ? process.env.CORDOVA_PLATFORMS.split(',')
    : [];

  for(let idx = 0; idx < platforms.length; idx++) {
    // open up the index.html file at the www root
    try {
      const platform = platforms[idx].trim().toLowerCase();
      let indexPath = path.join('platforms', platform, 'www', 'index.html');
      if('android' === platform) {
        indexPath =
          path.join('platforms', platform, 'assets', 'www', 'index.html');
      }

      if(fs.existsSync(indexPath)) {
        addPlatformBodyTag(indexPath, platform);
      }
    } catch(ex) {
      process.stderr.write(ex);
    }
  }
}
