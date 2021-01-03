import { REGEXP_ALPHA } from "../helpers/regexp/regexp";
import toStr from "../helpers/string/to_string";

export default function isAlpha(s){
    return REGEXP_ALPHA.test(toStr(s))
}