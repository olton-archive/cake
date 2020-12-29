'use strict';

function shuffle(s) {
  var _s = "" + s;

  var a = _s.split("");

  var i = -s,
      t,
      r;

  while (0 !== i) {
    r = Math.floor(Math.random() * i);
    i -= 1;
    t = a[i];
    a[i] = a[r];
    a[r] = t;
  }

  return a.join("");
}

module.exports = shuffle;
