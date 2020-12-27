import {use} from "../index";

use({
    split(sep, limit){
        return this.value.split(sep, limit);
    }
});
