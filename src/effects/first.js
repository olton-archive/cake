import toStr from "../helpers/string/to_string";
import substr from "./substr";

/*
* Get N first chars from string.
* */
export default function first(s, len){
  let _s = toStr(s);
  return _s ? substr(_s, 0, len) : '';
}