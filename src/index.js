/* global global */
(function(global) {
    'use strict';

    var cake = function(s){
        return new Cake(s);
    }

    var Cake = function(s){
        this.value = ""+s;
    }

    Cake.prototype = {
        toString: function(){
            return this.value;
        }
    }

    global.Cake = Cake;
    global.cake = cake;

}(typeof self === "undefined" ? typeof global === "undefined" ? window : global : self));
