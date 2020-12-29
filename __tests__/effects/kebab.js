import kebab from "../../src/effects/kebab-case";

test("Kebab test", () => {
    expect(kebab("camel!case.case")).toEqual("camel-case-case")
})

test("Kebab test", () => {
    expect(kebab("веРблюд!горБатый.Сука")).toEqual("верблюд-горбатый-сука")
})