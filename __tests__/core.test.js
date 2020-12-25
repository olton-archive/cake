require("../src/index");

const str = "" + cake("my-string");

test("Wrapping test into tag", () => {
    expect(str).toEqual("my-string");
});