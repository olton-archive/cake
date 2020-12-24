/* global global */
(function(global) {
    'use strict';

    var cake = function(s){
        return new Cake(s);
    }

    var Cake = function(v){
        this.value = ""+v;
    }

    global.Cake = Cake;
    global.cake = cake;

}(typeof self === "undefined" ? typeof global === "undefined" ? window : global : self));
