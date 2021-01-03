import last from "../../src/effects/last";

test("Last test", () => {
  expect(last("camel-case", 3)).toBe("ase")
})