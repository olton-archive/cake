import unescapeHtml from "../../src/escape/unescape_html";

test("unescape html test", () => {
    expect(unescapeHtml("&lt;p&gt;wonderful world&lt;/p&gt;")).toBe("<p>wonderful world</p>")
})