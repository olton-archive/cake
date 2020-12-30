import words from "../split/words";
import unique from "../helpers/array/unique";

export function countWords(s, pattern, flags){
    return words(s, pattern, flags).length;
}

export function countUniqueWords(s, pattern, flags){
    return unique(words(s, pattern, flags)).length;
}