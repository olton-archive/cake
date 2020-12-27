class Cake {
    #value;

    constructor(s) {
        this.#value = ""+s
    }

    get value(){
        return this.#value;
    }

    set value(s){
        this.#value = ""+s;
    }

    toString(){
        return this.#value;
    }

    valueOf(){
        return this.#value;
    }
}

const use = function(...mixins){
    return Object.assign(Cake.prototype, ...mixins)
}

const cake = function(s){
    return new Cake(s)
}

window.cake = cake;

export default Cake;
export {
    cake,
    use
}