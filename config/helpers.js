/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

// Helper functions

const path = require('path');
const ROOT = path.resolve(__dirname, '..');

exports.root = (...args) =>
  path.join(...[ROOT].concat(Array.prototype.slice.call(args, 0)));
