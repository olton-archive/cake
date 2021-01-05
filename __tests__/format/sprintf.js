import {sprintf} from "../../src/format/sprintf"

test("sprintf test", () => {
    expect(sprintf('%%')).toBe("%")
    expect(sprintf('%b', 2)).toBe('10')
    expect(sprintf('%c', 65)).toBe('A')
})