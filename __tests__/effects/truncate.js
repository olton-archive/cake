import truncate from "../../src/effects/truncate";

test("Truncate test", () => {
  expect(truncate("camel-case", 5)).toBe("camel...")
  expect(truncate("camel-case", 10)).toBe("camel-case")
})