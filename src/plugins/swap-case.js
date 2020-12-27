import {use} from "../index"

const swap = function(swapped, char){
    const lc = char.toLowerCase()
    const uc = char.toUpperCase()

    return swapped + (char === lc ? uc : lc)
}

use({
    swap(){
        this.value = this.value.split("").reduce(swap, '')

        return this
    }
});
