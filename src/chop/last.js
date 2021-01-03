import toStr from "../helpers/string/to_string";
import substr from "./substr";

export default function last(s, len){
  let _s = toStr(s);
  return _s ? substr(_s, _s.length - len) : '';
}