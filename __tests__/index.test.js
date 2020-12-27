const {cake} = require("../src/index");

test("Core test", () => {
    expect(`${cake()}`).toEqual("");
});

test("Core test", () => {
    expect(+cake(123)).toEqual(123);
});

test("Core test", () => {
    expect(cake("my-string").toString()).toEqual("my-string");
});

test("Core test", () => {
    expect(Object.prototype.toString.call(cake("my-string"))).toEqual("[object Cake]");
});
