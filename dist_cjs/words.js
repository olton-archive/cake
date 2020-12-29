'use strict';

var regexp = require('./internal/regexp.js');

function nvl(val, def) {
  return regexp.isNull(val) ? def : val;
}

function words(s, pattern, flags) {
  var regexp$1;

  if (regexp.isNull(pattern)) {
    regexp$1 = regexp.REGEXP_EXTENDED_ASCII.test(s) ? regexp.REGEXP_LATIN_WORD : regexp.REGEXP_WORD;
  } else if (pattern instanceof RegExp) {
    regexp$1 = pattern;
  } else {
    regexp$1 = new RegExp(pattern, nvl(flags, ''));
  }

  return nvl(s.match(regexp$1), []);
}

module.exports = words;
