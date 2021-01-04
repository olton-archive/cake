import {stripTags, stripTagsAll} from "../../src/effects/strip_tags";

test("StripTagsAll test", () => {
  expect(stripTagsAll("<p>camel-case</p>")).toBe("camel-case")
  expect(stripTagsAll("<p>camel<span>-</span>case</p>")).toBe("camel-case")
})

test("StripTags test", () => {
  expect(stripTags("<p>camel-case</p>")).toBe("camel-case")
  expect(stripTags("<p>camel<span>-</span>case</p>", ['span'])).toBe("camel<span>-</span>case")
  expect(stripTags("<p>camel<span>-</span>case<br>text</p>", ['span', 'br'])).toBe("camel<span>-</span>case<br>text")
  expect(stripTags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', ['p'])).toBe("<p>Kevin van Zonneveld</p>")
  expect(stripTags('1 <br/> 1', [])).toBe("1  1")
  expect(stripTags('1 <br/> 1', ['br'])).toBe("1 <br/> 1")
  expect(stripTags('1 <br> 1', ['br'])).toBe("1 <br> 1")
})

