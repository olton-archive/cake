import camelcase from "../../src/effects/camel";

test('Test camelCase', () => {
    expect(camelcase("camel-case")).toEqual('camelCase')
    expect(camelcase("camel case")).toEqual('camelCase')
    expect(camelcase("camelCase")).toEqual('camelCase')
    expect(camelcase("camel_case")).toEqual('camelCase')
    expect(camelcase("camel_case")).not.toEqual('camel_case')
})


