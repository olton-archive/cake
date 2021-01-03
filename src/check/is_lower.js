import toStr from "../helpers/string/to_string";

export default function isLower(s){
    let _s = toStr(s)

    return _s.toLowerCase() === _s
}