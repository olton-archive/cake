import countSubstr from "../count/count_substrings";

export default function includes(s, search){
    return countSubstr(s, search) > 0
}