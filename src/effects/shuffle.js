import toStr from "../helpers/string/to_string";
import shuffleArray from "../helpers/array/shuffle";

export default function shuffle(s){
    let _s = toStr(s)

    return shuffleArray(_s.split("")).join("")
}
