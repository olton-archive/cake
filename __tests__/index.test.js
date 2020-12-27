const {cake} = require("../src/index");

test("Core test", () => {
    expect(cake("my-string").toString()).toEqual("my-string");
});