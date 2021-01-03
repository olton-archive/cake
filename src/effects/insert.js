import toStr from "../helpers/string/to_string";

export default function insert(s, sbj = '', pos = 0){
    let _s = toStr(s);

    return _s.substr(0, pos) + sbj + _s.substr(pos)
}