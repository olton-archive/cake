import {use} from "../index";
import "./words";

use({
    snake(){
        this.value = this.words().map( el => el.toLowerCase() ).join("_");

        return this
    }
});
