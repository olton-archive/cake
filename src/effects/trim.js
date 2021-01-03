import toStr from "../helpers/string/to_string";
import { isNull } from "../helpers/null/is_null";
import { REGEXP_TRIM_LEFT, REGEXP_TRIM_RIGHT } from "../helpers/regexp/regexp";
import includes from "../check/includes";

const reduce = Array.prototype.reduce;
const reduceRight = Array.prototype.reduceRight;

export function trim(s, ws){
    return ltrim(rtrim(s, ws), ws)
}

export function ltrim(s, ws){
    let _s = toStr(s)

    if (isNull(ws)) {return _s.replace(REGEXP_TRIM_LEFT, '')}
    if (ws === '' || _s === '') {return _s}
    if (typeof ws !== "string") {ws = ''}

    let match = true

    return reduce.call(
        _s,
        (trimmed, char) => {
            if (match && includes(ws, char)) {
                return trimmed;
            }
            match = false
            return trimmed + char
        },
        ''
    );
}

export function rtrim(s, ws){
    let _s = toStr(s)

    if (isNull(ws)) {return _s.replace(REGEXP_TRIM_RIGHT, '')}
    if (ws === '' || _s === '') {return _s}
    if (typeof ws !== "string") {ws = ''}

    let match = true

    return reduceRight.call(
        _s,
        (trimmed, char) => {
            if (match && includes(ws, char)) {
                return trimmed
            }
            match = false
            return char + trimmed
        },
        ''
    );
}