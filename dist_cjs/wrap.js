'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function wrapTag(s) {
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
  return "<".concat(tag, ">").concat(this.value, "</").concat(tag, ">");
}

function wrap(s) {
  var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var after = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return before + s + after;
}

exports.wrap = wrap;
exports.wrapTag = wrapTag;
