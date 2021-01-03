import toStr from "../helpers/string/to_string";

export default function startWith(s, start, pos){
    let _s = toStr(s)

    return _s.startsWith(start, pos)
}