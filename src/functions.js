import camelCase from "./effects/camel_case";
import capitalize from "./effects/capitalize";
import dashedName from "./effects/dashed_name";
import decapitalize from "./effects/decapitalize";
import kebab from "./effects/kebab_case";
import lower from "./effects/lower_case";
import reverse from "./effects/reverse";
import shuffle from "./effects/shuffle";
import snake from "./effects/snake_case";
import swap from "./effects/swap";
import title from "./effects/title_case";
import upper from "./effects/upper_case";
import {wrap, wrapTag} from "./effects/wrap";
import words from "./split/words";
import chars from "./split/chars";
import count from "./count/count";
import {countChars, countUniqueChars} from "./count/count_chars";
import countSubstr from "./count/count_substrings";
import {countWords, countUniqueWords} from "./count/count_words";
import escapeHtml from "./escape/escape_html";
import unescapeHtml from "./escape/unescape_html";
import unique from "./effects/unique";
import substr from "./chop/substr";
import first from "./chop/first";
import last from "./chop/last";
import truncate from "./chop/truncate";
import slice from "./chop/slice"

export default {
    camelCase,
    capitalize,
    chars,
    count,
    countChars,
    countUniqueChars,
    countSubstr,
    countWords,
    countUniqueWords,
    dashedName,
    decapitalize,
    kebab,
    lower,
    reverse,
    shuffle,
    snake,
    swap,
    title,
    upper,
    words,
    wrap,
    wrapTag,
    escapeHtml,
    unescapeHtml,
    unique,
    substr,
    first,
    last,
    truncate,
    slice
}

