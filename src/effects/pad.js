import toStr from "../helpers/string/to_string";
import { isNull } from "../helpers/null/is_null";
import clip from "../helpers/number/clip";
import toInt from "../helpers/number/to_integer";
import { MAX_SAFE_INTEGER } from "../helpers/number/const";
import padBuilder from "../helpers/string/pad_builder";

export function pad(s, len, pad = ' '){
    let _s = toStr(s)
    let _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)
    let _padLen = pad.length
    let _paddingLen = _len - _s.length
    let _sideLen = toInt(_paddingLen / 2) //?
    let _remainingLen = _paddingLen % 2 //?

    if (_paddingLen <= 0 || _padLen === 0) {return _s}

    return padBuilder(pad, _sideLen) + _s + padBuilder(pad, _sideLen + _remainingLen) //?
}

const _pad = (s, len, pad, left) => {
    let _s = toStr(s)
    let _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)
    let _padLen = pad.length
    let _paddingLen = _len - _s.length
    let _sideLen = _paddingLen

    if (_paddingLen <= 0 || _padLen === 0) {return _s}

    let pads = padBuilder(pad, _sideLen)

    return left ? pads + _s : _s + pads
}

export function lpad(s, len, pad = ' '){
    return _pad(s, len, pad, true)
}

export function rpad(s, len, pad = ' '){
    return _pad(s, len, pad, false)
}