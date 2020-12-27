import {use} from "../index";

use({
    camelCase(){
        this.value = this.value.replace( /-([a-z])/g, (a, l) => {
            return l.toUpperCase()
        });
        return this
    }
});