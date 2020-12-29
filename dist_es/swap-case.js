var _swap = function _swap(swapped, _char) {
  var lc = _char.toLowerCase();

  var uc = _char.toUpperCase();

  return swapped + (_char === lc ? uc : lc);
};

function swap(s) {
  return s.split("").reduce(_swap, '');
}

export default swap;
