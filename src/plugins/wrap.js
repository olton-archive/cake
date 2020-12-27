import {use} from "../index"

use({
    wrapTag(tag = "div"){
        this.value = `<${tag}>${this.value}</${tag}>`
        return this
    },

    wrap(before = "", after = ""){
        this.value = before + this.value + after
        return this
    }
});
