"use strict";

// task 1

let myArray = [3, 90, 5, -100, 50, 0, 560, 1];

myArray.sort(function (a, b) {
    return a - b;
});

// myArray.sort(( a, b ) => a - b);

console.log(myArray);