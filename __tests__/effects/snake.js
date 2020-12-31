import snake from "../../src/effects/snake_case";

test("Snake effect test", () => {
    expect(snake("learning to fly")).toBe("learning_to_fly")
    expect(snake("learningToFly")).toBe("learning_to_fly")
    expect(snake("-learning-To-Fly")).toBe("learning_to_fly")
})