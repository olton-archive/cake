import {trim, ltrim, rtrim} from "../../src/effects/trim";

test("Trim test", () => {
  expect(trim("   camel-case   ", " ")).toBe("camel-case")
  expect(trim("***camel-case***", "*")).toBe("camel-case")
})

test("Left Trim test", () => {
  expect(ltrim("   camel-case   ", " ")).toBe("camel-case   ")
  expect(ltrim("***camel-case***", "*")).toBe("camel-case***")
})

test("Right Trim test", () => {
  expect(rtrim("   camel-case   ", " ")).toBe("   camel-case")
  expect(rtrim("***camel-case***", "*")).toBe("***camel-case")
})

