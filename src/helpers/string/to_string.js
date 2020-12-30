import {isNull} from "../null/is_null";

export default function toStr(val, def = ""){
    if (isNull(val)) return def;
    if (typeof val === "string") return val;
    if (Array.isArray(val)) return val.join("");
    return JSON.stringify(val);
}