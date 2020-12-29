import {wrap, wrapTag} from "../../src/effects/wrap";

test("Test wrap", () => {
    expect(wrap("camel", "---", "+++")).toEqual("---camel+++");
})

test("Test wrapTag", () => {
    expect(wrapTag("camel", "div")).toEqual("<div>camel</div>");
    expect(wrapTag("camel", "span")).toEqual("<span>camel</span>");
})

