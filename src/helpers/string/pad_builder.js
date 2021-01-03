import repeat from "../../effects/repeat";

export default function padBuilder(pad, len){
    const padLength = pad.length
    const length = len - padLength

    return repeat(pad, length + 1).substr(0, len)
}