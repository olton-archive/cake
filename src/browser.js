import functions from "./functions";
import getGlobalObject from "./helpers/common/get_global";

Object.assign(Cake, functions);

let global = getGlobalObject();

global.Cake = Cake;

