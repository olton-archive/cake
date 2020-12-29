import { i as isNull, R as REGEXP_EXTENDED_ASCII, a as REGEXP_LATIN_WORD, b as REGEXP_WORD } from './internal/regexp.js';

function nvl(val, def) {
  return isNull(val) ? def : val;
}

function words(s, pattern, flags) {
  var regexp;

  if (isNull(pattern)) {
    regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  } else if (pattern instanceof RegExp) {
    regexp = pattern;
  } else {
    regexp = new RegExp(pattern, nvl(flags, ''));
  }

  return nvl(s.match(regexp), []);
}

export default words;
