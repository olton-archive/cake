import toStr from "../helpers/string/to_string";

export default function endsWith(s, end, pos){
    let _s = toStr(s)

    return _s.endsWith(end, pos)
}