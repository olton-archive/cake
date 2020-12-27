const {cake} = require("../src/index");
require("../src/plugins/snake-case");

test("snake case test", () => {
    let s = cake("learning to fly");
    expect(s.snake()+"").toEqual("learning_to_fly");
});

test("snake case test", () => {
    let s = cake("learningToFly");
    expect(s.snake()+"").toEqual("learning_to_fly");
});

test("snake case test", () => {
    let s = cake("-learning-To-Fly");
    expect(s.snake()+"").toEqual("learning_to_fly");
});
