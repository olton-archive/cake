"use strict";

(function () {
  Cake.use({
    camelCase() {
      this.value = this.value.replace(/-([a-z])/g, (a, l) => {
        return l.toUpperCase();
      });
      return this;
    }

  });
})();