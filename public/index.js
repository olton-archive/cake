// Core class
import Cake, {cake} from "../src/index";

// Effects
import "../src/plugins/shuffle"
import "../src/plugins/to-array"
import "../src/plugins/dashed-name"
import "../src/plugins/camel-case"
import "../src/plugins/wrap"

console.log(cake(123) === "123");
console.log(cake("camel-case").camelCase()+"");