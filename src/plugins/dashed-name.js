import {use} from "../index";
import "./words";


use({
    dashedName(){
        this.value = this.words().map( (el) => el.toLowerCase() ).join("-");
        return this
    }
});
