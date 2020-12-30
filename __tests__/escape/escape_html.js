import escapeHtml from "../../src/escape/escape_html";

test("escape html test", () => {
    expect(escapeHtml("<p>wonderful world</p>")).toBe("&lt;p&gt;wonderful world&lt;/p&gt;")
})