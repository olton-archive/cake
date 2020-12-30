import {MAX_SAFE_INTEGER} from "./const";

export default function toInt(val){
    if (val === Infinity) return MAX_SAFE_INTEGER;
    if (val === -Infinity) return -MAX_SAFE_INTEGER;
    return ~~val;
}