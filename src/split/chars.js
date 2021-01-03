import toStr from "../helpers/string/to_string";

/*
* Split string to chars array with ignores
* */
export default function chars(s, ignore = []){
    return (toStr(s)).split("").filter( (el) => !ignore.includes(el) );
}
