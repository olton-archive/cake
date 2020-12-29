import capitalize from "../../src/effects/capitalize";

test('Capitalize test', () => {
    expect(capitalize("camel")).toEqual("Camel")
    expect(capitalize("camel case")).toEqual("Camel case")
    expect(capitalize("camel-case")).toEqual("Camel-case")
    expect(capitalize("camel-case")).not.toEqual("camel-case")
})

