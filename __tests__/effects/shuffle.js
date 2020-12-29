import shuffle from "../../src/effects/shuffle";

test("Shuffle test", () => {
    expect(shuffle("camel")).not.toBe("camel")
    expect(shuffle("camel").length).toBe(5)
})