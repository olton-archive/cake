import decapitalize from "../../src/effects/decapitalize";

test("Decapitalize test", () => {
    expect(decapitalize("Camel")).toEqual("camel")
})

test("Decapitalize test", () => {
    expect(decapitalize("Camel Case")).toEqual("camel Case")
})

test("Decapitalize test", () => {
    expect(decapitalize("CamelCase")).toEqual("camelCase")
})

test("Decapitalize test", () => {
    expect(decapitalize("CAMEL-Case")).toEqual("cAMEL-Case")
})
