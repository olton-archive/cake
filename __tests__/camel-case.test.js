const {cake} = require("../src/index");
require("../src/plugins/camel-case");

test("camel case test", () => {
    let s = cake("camel-case");
    expect(s.camelCase()+"").toEqual("camelCase");
});

test("camel case test", () => {
    let s = cake("camel case");
    expect(s.camelCase()+"").toEqual("camelCase");
});

test("camel case test", () => {
    let s = cake("As i have shaped you, so you must reject one another.");
    expect(s.camelCase()+"").toEqual("asIHaveShapedYouSoYouMustRejectOneAnother");
});

