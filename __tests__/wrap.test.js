const {cake} = require("../src/index");
require("../src/plugins/wrap");

test("wrapTag test", () => {
    expect(cake("camel").wrapTag()+"").toEqual("<div>camel</div>");
    expect(cake("camel").wrapTag("span")+"").toEqual("<span>camel</span>");
});
test("wrap test ", () => {
    expect(cake("camel").wrap("---", "+++")+"").toEqual("---camel+++");
});
