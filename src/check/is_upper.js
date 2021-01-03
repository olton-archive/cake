import toStr from "../helpers/string/to_string";

export default function isUpper(s){
    let _s = toStr(s)

    return _s.toUpperCase() === _s
}