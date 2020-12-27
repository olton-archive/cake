const {cake} = require("../src/index");
require("../src/plugins/dashed-name");

test("Dashed name test", () => {
    let s = cake("dashedName");
    expect(s.dashedName()+"").toEqual("dashed-name");
});