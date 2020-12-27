const {cake} = require("../src/index");
require("../src/plugins/words");

test("Split to words test", () => {
    let s = cake("camel case");
    expect(s.words()).toEqual(["camel", "case"]);
});

test("Split to words test", () => {
    let s = cake("camel case");
    expect(s.words(/[^\s]+/g)).toEqual(["camel", "case"]);
});
