import toStr from "../helpers/string/to_string";

export default function countSubstr(s, sub){
    let _s = toStr(s)
    let _sub = toStr(sub)
    return _s === '' || _sub === '' ? 0 : _s.split(_sub).length - 1;
}