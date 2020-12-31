import words from "../split/words";
import capitalize from "./capitalize";
import toStr from "../helpers/string/to_string";

export default function camelCase(s){
    return words(toStr(s)).map( (el, i) => {
        return i === 0 ? el.toLowerCase() : capitalize(el)
    } ).join("")
}
