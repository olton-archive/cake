import { R as REGEXP_EXTENDED_ASCII, a as REGEXP_LATIN_WORD, b as REGEXP_WORD, i as isNull } from './internal/regexp.js';
import capitalize from './capitalize.js';
import lower from './lower-case.js';

function title(s, noSplit) {
  var _s = "" + s;

  var regexp = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  var noSplitArray = Array.isArray(noSplit) ? noSplit : !isNull(noSplit) ? noSplit.split() : [];
  return _s.replace(regexp, function (w, i) {
    var isNoSplit = i && noSplitArray.includes(_s[i - 1]);
    return isNoSplit ? lower(s) : capitalize(s);
  });
}

export default title;
