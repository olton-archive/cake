import words from "../split/words";
import toStr from "../helpers/string/to_string";

export default function snake(s){
    return words(toStr(s)).map( el => el.toLowerCase() ).join("_")
}
