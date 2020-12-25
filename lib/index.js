"use strict";

(function (global) {
  const cake = function (s) {
    return new Cake(s);
  };

  const Cake = function (s) {
    this.value = "" + s;
  };

  Cake.use = function (...mixins) {
    return Object.assign(Cake.prototype, ...mixins);
  };

  Cake.prototype.toString = function () {
    return this.value;
  };

  global.Cake = Cake;
  global.cake = cake;
})(window || global || self);