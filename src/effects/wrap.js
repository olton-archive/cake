import toStr from "../helpers/string/to_string";

function wrapTag(s, tag = "div"){
    return `<${tag}>${toStr(s)}</${tag}>`
}

function wrap(s, before = "", after = ""){
    return  before + toStr(s) + after
}

export {
    wrap,
    wrapTag
}
