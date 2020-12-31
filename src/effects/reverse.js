import chars from "../split/chars";
import toStr from "../helpers/string/to_string";

export default function reverse(s){
    return chars(toStr(s)).reverse().join("");
}

