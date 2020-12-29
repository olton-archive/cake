import dashedName from "../../src/effects/dashed-name";

test('Dashed name test', () => {
    expect(dashedName("camelCase")).toEqual("camel-case")
})

test('Dashed name test', () => {
    expect(dashedName("camel Case")).toEqual("camel-case")
})

test('Dashed name test', () => {
    expect(dashedName("Верблюд Идет")).toEqual("верблюд-идет")
})
