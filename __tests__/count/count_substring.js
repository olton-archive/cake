import countSubstr from "../../src/count/count_substrings";

test("Count substr test", () => {
    expect(countSubstr("camel-case", "ca")).toBe(2)
    expect(countSubstr("camel-case", "-c")).toBe(1)
    expect(countSubstr("camel-case", "")).toBe(0)
    expect(countSubstr("", "")).toBe(0)
    expect(countSubstr("", "123")).toBe(0)
    expect(countSubstr("bad boys, bad boys whatcha gonna do?", "boys")).toBe(2)
})