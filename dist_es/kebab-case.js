import './internal/regexp.js';
import words from './words.js';

function kebab(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("-");
}

export default kebab;
