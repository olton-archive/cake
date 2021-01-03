import prune from "../../src/effects/prune";

test("Prune test", () => {
  expect(prune("Once upon a time", 7, "...")).toBe("Once...")
  expect(prune('Good day, Little Red Riding Hood', 16, ' (more)')).toBe("Good day (more)")
})