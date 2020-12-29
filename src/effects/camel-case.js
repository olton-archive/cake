import words from "./words";
import capitalize from "./capitalize";

export default function camelCase(s){
    return words(""+s).map( (el, i) => {
        return i === 0 ? el.toLowerCase() : capitalize(el).toString()
    } ).join("")
}
