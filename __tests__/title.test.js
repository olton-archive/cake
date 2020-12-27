const {cake} = require("../src/index");
require("../src/plugins/title-case");

test("title case test", () => {
    let s = cake("learning to fly");
    expect(s.title()+"").toEqual("Learning To Fly");
});

test("title case test", () => {
    let s = cake("jean-luc is good-looking");
    expect(s.title("-")+"").toEqual("Jean-luc Is Good-looking");
});

test("title case test", () => {
    let s = cake("jean-luc is good-looking");
    expect(s.title(["-"])+"").toEqual("Jean-luc Is Good-looking");
});

test("title case test", () => {
    let s = cake("жан-люк хорошо-выглядит");
    expect(s.title(["-"])+"").toEqual("Жан-люк Хорошо-выглядит");
});


