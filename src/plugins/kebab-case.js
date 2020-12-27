import {use} from "../index"
import "./words"

use({
    kebab(){
        this.value = this.words().map( el => el.toLowerCase() ).join("-")

        return this
    }
});
