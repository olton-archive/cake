const {cake} = require("../src/index");
require("../src/plugins/kebab-case");

test("kebab case test", () => {
    let s = cake("learning to fly");
    expect(s.kebab()+"").toEqual("learning-to-fly");
});

test("kebab case test", () => {
    let s = cake("learningToFly");
    expect(s.kebab()+"").toEqual("learning-to-fly");
});

test("kebab case test", () => {
    let s = cake("-learning-To-Fly");
    expect(s.kebab()+"").toEqual("learning-to-fly");
});
