import camelCase from "../../src/effects/camel-case";

test('Test camelCase', () => {
    expect(camelCase("camel-case")).toEqual('camelCase')
})

test('Test camelCase', () => {
    expect(camelCase("camel case")).toEqual('camelCase')
})

test('Test camelCase', () => {
    expect(camelCase("camelCase")).toEqual('camelCase')
})

test('Test camelCase', () => {
    expect(camelCase("camel_case")).toEqual('camelCase')
})

test('Test camelCase', () => {
    expect(camelCase("camel_case")).not.toEqual('camel_case')
})

