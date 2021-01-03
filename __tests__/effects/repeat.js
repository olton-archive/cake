import repeat from "../../src/effects/repeat";

test("Repeat test", () => {
  expect(repeat("w", 3)).toBe("www")
  expect(repeat("camel", 0)).toBe("")
})