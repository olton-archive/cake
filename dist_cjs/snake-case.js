'use strict';

require('./internal/regexp.js');
var words = require('./words.js');

function snake(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("_");
}

module.exports = snake;
