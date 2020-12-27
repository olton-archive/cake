import {use} from "../index"

use({
    decapitalize(){
        this.value = this.value.substr(0, 1).toLowerCase() + this.value.substr(1)

        return this
    }
});
