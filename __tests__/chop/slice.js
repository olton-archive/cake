import slice from "../../src/chop/slice";

test("Slice test", () => {
  expect(slice("camel-case", 2)).toEqual(["camel", "-case"])
  expect(slice("camel-case")).toEqual(["camel-case"])
  expect(slice("camel-case", 5)).toEqual(["ca", "me", "l-", "ca", "se"])
})