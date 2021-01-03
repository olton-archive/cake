import f from "./functions";

class Cake {
    _value;

    constructor(s = "") {
        this._value = ""+s
    }

    [Symbol.toPrimitive](hint){
        if (hint === "number") {
            return +this.value
        }

        return this.value
    }

    get [Symbol.toStringTag](){return "Cake"}

    get value(){return this._value}
    set value(s){this._value = s}

    get length(){return this._value.length}

    toString(){return this.value}

    /* escape */
    escapeHtml(){
        this.value = f.escapeHtml(this.value)
        return this
    }

    unescapeHtml(){
        this.value = f.unescapeHtml(this.value)
        return this
    }
    /* end of escape */

    camelCase(){
        this.value = f.camelCase(this.value)
        return this
    }

    capitalize(){
        this.value = f.capitalize(this.value)
        return this
    }

    chars(){
        return f.chars(this.value)
    }

    count(){
        return f.count(this.value)
    }

    countChars(ignore){
        return f.countChars(this.value, ignore)
    }

    countUniqueChars(ignore){
        return f.countUniqueChars(this.value, ignore)
    }

    countSubstr(sub){
        return f.countSubstr(this.value, sub)
    }

    countWords(pattern, flags){
        return f.countWords(this.value, pattern, flags)
    }

    countUniqueWords(pattern, flags){
        return f.countUniqueWords(this.value, pattern, flags)
    }

    dashedName(){
        this.value = f.dashedName(this.value)
        return this
    }

    decapitalize(){
        this.value = f.decapitalize(this.value)
        return this
    }

    kebab(){
        this.value = f.kebab(this.value)
        return this
    }

    lower(){
        this.value = f.lower(this.value)
        return this
    }

    reverse(){
        this.value = f.reverse(this.value);
        return this
    }

    shuffle(){
        this.value = f.shuffle(this.value)
        return this
    }

    snake(){
        this.value = f.snake(this.value)
        return this
    }

    swap(){
        this.value = f.swap(this.value)
        return this
    }

    title(){
        this.value = f.title(this.value)
        return this
    }

    upper(){
        this.value = f.upper(this.value)
        return this
    }

    words(pattern, flags){
        return f.words(this.value, pattern, flags)
    }

    wrap(a, b){
        this.value = f.wrap(this.value, a, b)
        return this
    }

    wrapTag(t){
        this.value = f.wrapTag(this.value, t)
        return this
    }

    pad(len, pad){
        this.value = f.pad(this.value, len, pad)
        return this
    }

    lpad(len, pad){
        this.value = f.lpad(this.value, len, pad)
        return this
    }

    rpad(len, pad){
        this.value = f.rpad(this.value, len, pad)
        return this
    }

    repeat(times){
        this.value = f.repeat(this.value, times)
        return this
    }

    prune(len, end){
        this.value = f.prune(this.value, len, end)
        return this
    }

    slice(parts){
        return f.slice(this.value, parts)
    }

    truncate(len, end){
        this.value = f.truncate(this.value, len, end)
        return this
    }

    last(len){
        this.value = f.last(this.value, len)
        return this
    }

    first(len){
        this.value = f.first(this.value, len)
        return this
    }

    substr(start, len){
        this.value = f.substr(this.value, start, len)
        return this
    }

    unique(ignore){
        this.value = f.unique(this.value, ignore)
        return this
    }
}

const cake = function(s){
    return new Cake(s)
}

export default Cake;
export {
    cake
}