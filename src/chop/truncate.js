import toStr from "../helpers/string/to_string";
import substr from "./substr";
import { isNull } from "../helpers/null/is_null";
import clip from "../helpers/number/clip"
import toInt from "../helpers/number/to_integer";
import { MAX_SAFE_INTEGER } from "../helpers/number/const";

export default function truncate(s, len, end = '...'){
  let _s = toStr(s)
  let _len = isNull(len) || isNaN(len) ? _s.length : clip(toInt(len), 0, MAX_SAFE_INTEGER)

  return substr(_s, 0, _len) + (_s.length === _len ? '' : end)
}