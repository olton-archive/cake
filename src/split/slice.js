import toStr from "../helpers/string/to_string";
import substr from "../effects/substr";

/*
* Slice string to N parts.
* */
export default function slice(s, parts = 1){
  let _s = toStr(s)
  let res = []
  let len = Math.round(_s.length / parts)

  for(let i = 0; i < parts; i++) {
    res.push(
      substr(_s, i * len, len)
    )
  }

  return res
}