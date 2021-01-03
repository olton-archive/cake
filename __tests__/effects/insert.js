import insert from "../../src/effects/insert";

test("Insert test", () => {
  expect(insert("camelcase", "-",5)).toBe("camel-case")
})