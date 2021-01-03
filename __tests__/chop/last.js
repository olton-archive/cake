import last from "../../src/chop/last";

test("Last test", () => {
  expect(last("camel-case", 3)).toBe("ase")
})