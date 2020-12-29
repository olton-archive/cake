import capitalize from "../../src/effects/capitalize";

test('Capitalize test', () => {
    expect(capitalize("camel")).toEqual("Camel")
})

test('Capitalize test', () => {
    expect(capitalize("camel case")).toEqual("Camel case")
})

test('Capitalize test', () => {
    expect(capitalize("camel-case")).toEqual("Camel-case")
})

test('Capitalize test', () => {
    expect(capitalize("camel-case")).not.toEqual("camel-case")
})
