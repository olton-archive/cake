import functions from "./functions";
import Cake, {cake} from "./type";

Object.assign(Cake, functions);

if (typeof window !== "undefined") {
    window.cake = cake;
    window.Cake = Cake;
}

export default Cake;
export {
    cake
}
