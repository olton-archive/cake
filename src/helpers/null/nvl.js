import {isNull} from "./is_null";

export function nvl(val, def){
    return isNull(val) ? def : val;
}