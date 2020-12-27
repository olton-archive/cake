const {cake} = require("../src/index");
require("../src/plugins/decapitalize");

test("camel case test", () => {
    let s = cake("Camel");
    expect(s.decapitalize()+"").toEqual("camel");
});


