import words from "./words";

export default function dashedName(s){
    return words(""+s).map( (el) => el.toLowerCase() ).join("-")
}
