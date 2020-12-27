const {cake} = require("../src/index");
require("../src/plugins/swap-case");

test("swap case test", () => {
    let s = cake("League of Shadows");
    expect(s.swap()+"").toEqual("lEAGUE OF sHADOWS");
});

test("swap case test", () => {
    let s = cake("2 Beers");
    expect(s.swap()+"").toEqual("2 bEERS");
});

