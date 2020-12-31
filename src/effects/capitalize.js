import toStr from "../helpers/string/to_string";

export default function capitalize(s){
    let _s = toStr(s)
    return (_s).substr(0, 1).toUpperCase() + (_s).substr(1).toLowerCase()
}
