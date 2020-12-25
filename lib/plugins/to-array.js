"use strict";

(function () {
  Cake.use({
    toArray(sep = "", fn) {
      let result = this.value.split(sep);

      if (typeof fn === "function") {
        result = result.map(fn);
      }

      return result;
    }

  });
})();