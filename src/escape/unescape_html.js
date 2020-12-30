import toStr from "../helpers/string/to_string";

const unescapeCharsMap = {
    '<': /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
    '>': /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
    '&': /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
    '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
    "'": /(&#x0*27;)|(&#0*39;)/gi,
    '`': /(&#x0*60;)|(&#0*96;)/gi,
};
const chars = Object.keys(unescapeCharsMap);

function reduceUnescapedString(string, key) {
    return string.replace(unescapeCharsMap[key], key);
}

export default function unescapeHtml(s){
    return chars.reduce(reduceUnescapedString, toStr(s));
}