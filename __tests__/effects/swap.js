import swap from "../../src/effects/swap";

test("Swap test", () => {
    expect(swap("League of Shadows")).toBe("lEAGUE OF sHADOWS")
    expect(swap("2 Beers")).toBe("2 bEERS")
})