import { REGEXP_DIGIT } from "../helpers/regexp/regexp";
import toStr from "../helpers/string/to_string";

export default function isAlphaDigit(s){
    return REGEXP_DIGIT.test(toStr(s))
}