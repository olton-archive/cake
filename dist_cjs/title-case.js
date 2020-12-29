'use strict';

var regexp = require('./internal/regexp.js');
var capitalize = require('./capitalize.js');
var lowerCase = require('./lower-case.js');

function title(s, noSplit) {
  var _s = "" + s;

  var regexp$1 = regexp.REGEXP_EXTENDED_ASCII.test(_s) ? regexp.REGEXP_LATIN_WORD : regexp.REGEXP_WORD;
  var noSplitArray = Array.isArray(noSplit) ? noSplit : !regexp.isNull(noSplit) ? noSplit.split() : [];
  return _s.replace(regexp$1, function (w, i) {
    var isNoSplit = i && noSplitArray.includes(_s[i - 1]);
    return isNoSplit ? lowerCase(s) : capitalize(s);
  });
}

module.exports = title;
