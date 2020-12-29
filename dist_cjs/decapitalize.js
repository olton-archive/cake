'use strict';

function decapitalize(s) {
  return ("" + s).substr(0, 1).toLowerCase() + ("" + s).substr(1);
}

module.exports = decapitalize;
