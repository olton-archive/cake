import camelCase from "./effects/camel_case"
import capitalize from "./effects/capitalize"
import dashedName from "./effects/dashed_name"
import decapitalize from "./effects/decapitalize"
import kebab from "./effects/kebab_case"
import lower from "./effects/lower_case"
import reverse from "./effects/reverse"
import shuffle from "./effects/shuffle"
import snake from "./effects/snake_case"
import swap from "./effects/swap"
import title from "./effects/title_case"
import upper from "./effects/upper_case"
import {wrap, wrapTag} from "./effects/wrap"
import words from "./split/words"
import chars from "./split/chars"
import count from "./count/count"
import {countChars, countUniqueChars} from "./count/count_chars"
import countSubstr from "./count/count_substrings"
import {countWords, countUniqueWords} from "./count/count_words"
import escapeHtml from "./escape/escape_html"
import unescapeHtml from "./escape/unescape_html"
import unique from "./effects/unique"
import substr from "./effects/substr"
import first from "./effects/first"
import last from "./effects/last"
import truncate from "./effects/truncate"
import slice from "./split/slice"
import prune from "./effects/prune"
import repeat from "./effects/repeat"
import { pad, lpad, rpad } from "./effects/pad"
import insert from "./effects/insert"
import includes from "./check/includes"
import {trim, rtrim, ltrim} from "./effects/trim"
import endsWith from "./check/ends_with"
import isAlpha from "./check/is_alpha"
import isAlphaDigit from "./check/is_alpha_digit"
import isDigit from "./check/is_digit"
import isBlank from "./check/is_blank"
import isEmpty from "./check/is_empty"
import isLower from "./check/is_lower"
import isUpper from "./check/is_upper"
import startWith from "./check/start_with"
import {stripTags, stripTagsAll} from "./effects/strip_tags"
import {sprintf, vsprintf} from "./format/sprintf"

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
    slice,
    prune,
    repeat,
    pad,
    lpad,
    rpad,
    insert,
    includes,
    trim,
    ltrim,
    rtrim,
    endsWith,
    isAlpha,
    isAlphaDigit,
    isDigit,
    isBlank,
    isEmpty,
    isLower,
    isUpper,
    startWith,
    stripTags,
    stripTagsAll,
    sprintf,
    vsprintf
}

