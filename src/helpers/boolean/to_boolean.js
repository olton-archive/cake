import {isNull} from "../null/is_null";

export default function toBool(val, def = false){
    if (isNull(val)) return def;
    return Boolean(val);
}