import toStr from "../helpers/string/to_string";
import { REGEXP_TAGS } from "../helpers/regexp/regexp";

export function stripTagsAll(s){
    let _s = toStr(s)
    return _s.replace(REGEXP_TAGS, '')
}

export function stripTags(s, allowed = []){
    let _s = toStr(s)
    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi

    return _s.replace(tags, ($0, $1) => {
        let _$0 = $0 //?
        let _$1 = $1 //?
        return allowed.includes($1) ? $0 : ''
    })
}