import Cake, {cake} from "../src/type";

test("Test Cake type", () => {
    expect(cake() instanceof Cake).toBe(true)
})