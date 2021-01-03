import toStr from "../helpers/string/to_string";
import { isNull } from "../helpers/null/is_null";
import { trim } from "../effects/trim";

export default function matches(s, pattern, flags = ''){
    let _s = toStr(s)
    let patternStr

    if (!(pattern instanceof RegExp)) {
        patternStr = pattern ? trim(toStr(pattern)) : '';
        if (!patternStr) {
            return false
        }
        pattern = new RegExp(patternStr, flags)
    }
    return pattern.test(_s)
}