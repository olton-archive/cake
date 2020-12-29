import './internal/regexp.js';
import words from './words.js';
import capitalize from './capitalize.js';

function camelCase(s) {
  return words("" + s).map(function (el, i) {
    return i === 0 ? el.toLowerCase() : capitalize(el).toString();
  }).join("");
}

export default camelCase;
