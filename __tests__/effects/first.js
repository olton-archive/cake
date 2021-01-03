import first from "../../src/effects/first";

test("First test", () => {
  expect(first("camel-case", 3)).toBe("cam")
})