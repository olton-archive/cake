import {isNull} from "../null/is_null";

export default function toNum(val, def = 0){
    if (isNull(val)) {
        return def;
    }

    if (typeof val === "number") {
        return val;
    }

    return Number(val);
}