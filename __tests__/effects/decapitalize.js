import decapitalize from "../../src/effects/decapitalize";

test("Decapitalize test", () => {
    expect(decapitalize("Camel")).toEqual("camel")
    expect(decapitalize("Camel Case")).toEqual("camel Case")
    expect(decapitalize("CamelCase")).toEqual("camelCase")
    expect(decapitalize("CAMEL-Case")).toEqual("cAMEL-Case")
})

