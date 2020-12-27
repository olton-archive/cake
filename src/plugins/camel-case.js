import {use, cake} from "../index";
import "./words"
import "./capitalize"

use({
    camelCase(){
        this.value = this.words().map( (el, i) => {
            return i === 0 ? el.toLowerCase() : cake(el).capitalize().toString()
        } ).join("");

        return this
    }
});
