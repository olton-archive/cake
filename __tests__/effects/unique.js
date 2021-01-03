import unique from "../../src/effects/unique";

test("Unique test", () => {
  expect(unique("asdkkkxclaksfjjasdkjl")).toBe("asdkxclfj")
})