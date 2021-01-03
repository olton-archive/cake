import { trim } from "../effects/trim";

export default function isBlank(s){
    return trim(s).length === 0
}