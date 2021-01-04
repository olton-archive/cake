import Cake, {cake} from "../src/index"

test('Factory function test', () => {
    const s = new Cake("camel case");
    expect(s instanceof Cake).toEqual(true)
})

test('Factory function test', () => {
    const s = cake("camel case");
    expect(s + "").toEqual("camel case")
})

test("Factory test, convert to primitive value - string", () => {
    expect(`${cake()}`).toEqual("");
});

test("Factory test, convert to primitive value - number", () => {
    expect(+cake(123)).toEqual(123);
});

test("Factory test - toString()", () => {
    expect(cake("my-string").toString()).toEqual("my-string");
});

test("Factory test, stringTag", () => {
    expect(Object.prototype.toString.call(cake("my-string"))).toEqual("[object Cake]");
});
