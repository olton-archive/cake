import './internal/regexp.js';
import words from './words.js';

function snake(s) {
  return words("" + s).map(function (el) {
    return el.toLowerCase();
  }).join("_");
}

export default snake;
