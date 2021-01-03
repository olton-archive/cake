import toStr from "../helpers/string/to_string";

/*
* Get substring from string.
* */
export default function substr(s, start, len){
  let _s = toStr(s);
  return _s.substr(start, len);
}