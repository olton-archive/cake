'use strict';

require('./internal/regexp.js');
var words = require('./words.js');
var capitalize = require('./capitalize.js');

function camelCase(s) {
  return words("" + s).map(function (el, i) {
    return i === 0 ? el.toLowerCase() : capitalize(el).toString();
  }).join("");
}

module.exports = camelCase;
