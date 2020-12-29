import words from "../../src/split/words";

test("Words test", () => {
    expect(words("camel case")).toEqual(["camel", "case"])
    expect(words("行 く 行 く")).toEqual(["行", "く", "行", "く"])
    expect(words("行 く 行 く", /[^\s]+/g)).toEqual(["行", "く", "行", "く"])
    expect(words("行 く 行 く", '[^\\s]+', 'g')).toEqual(["行", "く", "行", "く"])
    expect(words("камел кайс", '[^\\s]+', 'g')).toEqual(["камел", "кайс"])
    expect(words("camel-case")).toEqual(["camel", "case"])
    expect(words("camelCase")).toEqual(["camel", "Case"])
    expect(words("Heavens of light! Will, cheerfully handle a wonderful wind. Where...")).toEqual(["Heavens", "of", "light", "Will", "cheerfully", "handle", "a", "wonderful", "wind", "Where"])
})