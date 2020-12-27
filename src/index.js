class Cake {
    _value;

    constructor(s = "") {
        this._value = ""+s
    }

    get value(){
        return this._value;
    }

    set value(s){
        this._value = ""+s;
    }

    toString(){
        return this._value;
    }

    valueOf(){
        return this._value;
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