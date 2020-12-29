import title from "../../src/effects/title";

test("Title test", () => {
    expect(title("learning to fly")).toBe("Learning To Fly")
    expect(title("jean-luc is good-looking", "-")).toBe("Jean-luc Is Good-looking")
    expect(title("jean-luc is good-looking", ["-"])).toBe("Jean-luc Is Good-looking")
    expect(title("жан люк хорошо выглядит")).toBe("Жан Люк Хорошо Выглядит")
    expect(title("жан-люк хорошо-выглядит", ["-"])).toBe("Жан-люк Хорошо-выглядит")
})
