let assert = require('assert');

require("../src/index");

describe("Test core functions", () => {
    it('should true', function () {
        assert.strictEqual(cake("string") + "", "string");
    });
})