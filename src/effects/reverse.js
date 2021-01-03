import chars from "../split/chars";
import toStr from "../helpers/string/to_string";

export default function reverse(s, ignore){
    return chars(toStr(s), ignore).reverse().join("");
}

