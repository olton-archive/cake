require("../../src/index");
require("../../src/plugins/to-array");

test("toArray default test", () => {
    let s = cake("camel case");
    expect(s.toArray(" ")).toEqual(["camel", "case"]);
});

test("toArray callback test", () => {
    let s = cake("camel case");
    expect(s.toArray(" ", (el) => el.toUpperCase())).toEqual(["CAMEL", "CASE"]);
});

test("toArray filter test", () => {
    let s = cake("a b c");
    expect(
        s.toArray(" ", null, (el) => el !== "b")
    ).toEqual(["a", "c"]);
});
