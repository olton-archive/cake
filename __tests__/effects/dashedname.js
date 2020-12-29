import dashedname from "../../src/effects/dashedname";

test('Dashed name test', () => {
    expect(dashedname("camelCase")).toEqual("camel-case")
    expect(dashedname("camel Case")).toEqual("camel-case")
    expect(dashedname("Верблюд Идет")).toEqual("верблюд-идет")
})

