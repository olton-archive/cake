import {use} from "../index";

use({
    capitalize(){
        this.value = this.value.substr(0, 1).toUpperCase() + this.value.substr(1);
        return this
    }
});
