'use strict';

function chars(s) {
  var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return ("" + s).split("").filter(function (el) {
    return !ignore.includes(el);
  });
}

module.exports = chars;
