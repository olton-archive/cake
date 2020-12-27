const {cake} = require("../src/index");
require("../src/plugins/words");

test("Split to words test", () => {
    let s = cake("camel case");
    expect(s.words()).toEqual(["camel", "case"]);
});

test("Split to words test", () => {
    let s = cake("行 く 行 く");
    expect(s.words()).toEqual(["行", "く", "行", "く"]);
});

test("Split to words test", () => {
    let s = cake("camel case");
    expect(s.words(/[^\s]+/g)).toEqual(["camel", "case"]);
});

test("Split to words test", () => {
    let s = cake("camel case");
    expect(s.words('[^\\s]+', 'g')).toEqual(["camel", "case"]);
});

test("Split to words test", () => {
    let s = cake("камел кайс");
    expect(s.words('[^\\s]+', 'g')).toEqual(["камел", "кайс"]);
});

test("Split to words test", () => {
    let s = cake("camel-case");
    expect(s.words()).toEqual(["camel", "case"]);
});

test("Split to words test", () => {
    let s = cake("camelCase");
    expect(s.words()).toEqual(["camel", "Case"]);
});

test("Split to words test", () => {
    let s = cake("Heavens of light! Will, cheerfully handle a wonderful wind. Where...");
    expect(s.words()).toEqual(["Heavens", "of", "light", "Will", "cheerfully", "handle", "a", "wonderful", "wind", "Where"]);
});
