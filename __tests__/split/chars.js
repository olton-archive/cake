import chars from "../../src/split/chars";

test("Words test", () => {
    expect(chars("camel")).toEqual(["c", "a", "m", "e", "l"])
})