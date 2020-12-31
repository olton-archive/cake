import kebab from "../../src/effects/kebab_case";

test("Kebab test", () => {
    expect(kebab("camel!case.case")).toEqual("camel-case-case")
    expect(kebab("веРблюд!горБатый.Сука")).toEqual("верблюд-горбатый-сука")
})

