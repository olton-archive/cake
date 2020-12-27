const {cake} = require("../src/index");
require("../src/plugins/shuffle");

test("shuffle test", () => {
    expect(cake("camel").shuffle()+"").not.toEqual("camel");
});