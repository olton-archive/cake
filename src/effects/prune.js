import toStr from "../helpers/string/to_string";
import { isNull } from "../helpers/null/is_null";
import clip from "../helpers/number/clip";
import toInt from "../helpers/number/to_integer";
import { MAX_SAFE_INTEGER } from "../helpers/number/const";
import { REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD } from "../helpers/regexp/regexp";

/*
* Truncates `subject` to a new `length` and does not break the words with specified ending.
* */
export default function prune(s, len, end = "") {
    let _s = toStr(s)
    let _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)
    let _truncatedLen = 0
    const pattern = REGEXP_EXTENDED_ASCII.test(_s) ? REGEXP_LATIN_WORD : REGEXP_WORD;

    _s.replace(pattern, (word, offset) => {
        const wordLength = offset + word.length;
        if (wordLength <= _len - end.length) {
            _truncatedLen = wordLength;
        }
    });
    return _s.substr(0, _truncatedLen) + end;
}
