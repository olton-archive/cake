export default function chars(s, ignore = []){
    return (""+s).split("").filter( (el) => !ignore.includes(el) );
}
