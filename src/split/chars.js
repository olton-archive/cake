import toStr from "../helpers/string/to_string";

export default function chars(s, ignore = []){
    return (toStr(s)).split("").filter( (el) => !ignore.includes(el) );
}
