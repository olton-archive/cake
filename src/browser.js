import functions from "./functions";
import Cake, {cake} from "./type";
import getGlobalObject from "./helpers/common/get_global";

Object.assign(Cake, functions);

let global = getGlobalObject();

global.cake = cake;
global.Cake = Cake;

