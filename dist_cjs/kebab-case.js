'use strict';

require('./internal/regexp.js');
var words = require('./words.js');

function kebab(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("-");
}

module.exports = kebab;
