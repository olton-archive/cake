import {use} from "../index"

use({
    toArray(sep = "", map, flt){
        let result = this.value.split(sep)

        if (typeof map === "function") {
            result = result.map(map)
        }

        if (typeof flt === "function") {
            result = result.filter(flt)
        }

        return result
    }
});
