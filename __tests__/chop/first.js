import first from "../../src/chop/first";

test("First test", () => {
  expect(first("camel-case", 3)).toBe("cam")
})