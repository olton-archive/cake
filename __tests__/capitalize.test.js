const {cake} = require("../src/index");
require("../src/plugins/capitalize");

test("camel case test", () => {
    let s = cake("camel");
    expect(s.capitalize()+"").toEqual("Camel");
});


