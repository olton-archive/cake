import includes from "../../src/check/includes"

test("Includes test", () => {
    expect(includes("camel-case", "-")).toEqual(true)
    expect(includes("camel-case", "+")).toEqual(false)
    expect(includes("camel-case", "camel")).toEqual(true)
    expect(includes("camel-case", "-camel")).toEqual(false)
})