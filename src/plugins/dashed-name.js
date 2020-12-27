import {use} from "../index";

use({
    dashedName(){
        this.value = this.value.replace(/([A-Z])/g, (u) => {
            return "-" + u.toLowerCase()
        });
        return this
    }
});
