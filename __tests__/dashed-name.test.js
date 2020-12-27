const {cake} = require("../src/index");
require("../src/plugins/dashed-name");

test("Dashed name test", () => {
    let s = cake("dashedName");
    expect(s.dashedName()+"").toEqual("dashed-name");
});

test("Dashed name test", () => {
    let s = cake("dashed Name");
    expect(s.dashedName()+"").toEqual("dashed-name");
});

test("Dashed name test", () => {
    let s = cake("Life is a lively shipmate.");
    expect(s.dashedName()+"").toEqual("life-is-a-lively-shipmate");
});
