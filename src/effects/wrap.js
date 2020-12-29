function wrapTag(s, tag = "div"){
    return `<${tag}>${this.value}</${tag}>`
}

function wrap(s, before = "", after = ""){
    return  before + s + after
}

export {
    wrap,
    wrapTag
}
