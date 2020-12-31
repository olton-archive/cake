import toStr from "../helpers/string/to_string";

const _swap = function(swapped, char){
    const lc = char.toLowerCase()
    const uc = char.toUpperCase()

    return swapped + (char === lc ? uc : lc)
}

export default function swap(s){
    return toStr(s).split("").reduce(_swap, '')
}
