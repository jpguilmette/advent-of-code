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
