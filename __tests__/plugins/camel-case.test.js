require("../../src/index");
require("../../src/plugins/camel-case");

test("camel case test", () => {
    let s = cake("camel-case");
    expect(s.camelCase()+"").toEqual("camelCase");
});