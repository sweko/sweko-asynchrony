"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var source = rxjs_1.Observable.create(function (observer) {
    var nextResult = function () {
        var random = Math.floor(Math.random() * 500);
        observer.next(random);
        setTimeout(function () { return nextResult(); }, random);
    };
    nextResult();
});
source.subscribe(function (n) { return console.log(n); });
