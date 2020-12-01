"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var data = fs_1.readFileSync("./input.txt", "utf8");
var inputArray = data.split("\n");
inputArray.some(function (numberA, index, array) {
    var residualArray = array.slice(index + 1);
    return residualArray.some(function (numberB) {
        if (parseInt(numberA) + parseInt(numberB) === 2020) {
            console.log(parseInt(numberA) * parseInt(numberB));
            return true;
        }
        return false;
    });
});
inputArray.some(function (numberA, indexA, arrayA) {
    var residualArrayA = arrayA.slice(indexA + 1);
    return residualArrayA.some(function (numberB, indexB, arrayB) {
        var residualArrayB = arrayB.slice(indexB + 1);
        return residualArrayB.some(function (numberC) {
            if (parseInt(numberA) + parseInt(numberB) + parseInt(numberC) === 2020) {
                console.log(parseInt(numberA) * parseInt(numberB) * parseInt(numberC));
                return true;
            }
            return false;
        });
    });
});
