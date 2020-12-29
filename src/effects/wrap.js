function wrapTag(s, tag = "div"){
    return `<${tag}>${s}</${tag}>`
}

function wrap(s, before = "", after = ""){
    return  before + s + after
}

export {
    wrap,
    wrapTag
}
