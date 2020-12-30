import chars from "../split/chars";
import unique from "../helpers/array/unique";

export function countChars(s, ignore){
    return chars(s, ignore).length;
}

export function countUniqueChars(s, ignore){
    return unique(chars(s, ignore)).length;
}
