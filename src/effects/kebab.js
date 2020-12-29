import words from "../split/words";

export default function kebab(s){
    return words(s).map( el => el.toLowerCase() ).join("-")
}
