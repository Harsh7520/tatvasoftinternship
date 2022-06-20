"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(name) {
        this.name = "HelloWorld";
        this.name = name;
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var x = new App("harsh");
console.warn(x.getName());
