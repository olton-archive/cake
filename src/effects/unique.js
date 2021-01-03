import un from "../helpers/array/unique";
import chars from "../split/chars";

export default function unique(s, ignore){
  return un(chars(s, ignore)).join("");
}