import un from "../helpers/array/unique";
import words from "../split/words";

export default function uniqueWords(s, pattern, flags){
  return un(words(s, pattern, flags)).join("");
}