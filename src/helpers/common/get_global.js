let __global = null;

function getGlobalObject() {
    if (__global !== null) {
        return __global;
    }
    if (typeof global === 'object' && global.Object === Object) {
        __global = global;
    } else if (typeof self === 'object' && self.Object === Object) {
        __global = self;
    } else {
        __global = new Function('return this')();
    }
    return __global;
}

export default getGlobalObject;