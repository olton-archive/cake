import words from "./words";

export default function snake(s){
    return words(""+s).map( el => el.toLowerCase() ).join("_")
}
