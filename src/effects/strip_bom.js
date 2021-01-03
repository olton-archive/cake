import toStr from "../helpers/string/to_string";

const BYRE_ORDER_MARK = '\uFEFF';

export default function(s){
    let _s = toStr(s)

    if (_s === '') return _s

    return _s[0] === BYRE_ORDER_MARK ? _s.substr(1) : _s
}