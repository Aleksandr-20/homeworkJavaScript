"use strict";

// task 1

function getCountProducts(count) {
    if (count % 10 === 1 && count !== 11) return `${count} товар`;
    if ((count % 10 === 2 && count % 100 !== 12) || (count % 10 === 3  && count % 100 !== 13) 
        || (count % 10 === 4  && count % 100 !== 14)) return `${count} товара`;
    return `${count} товаров`;
}

console.log(getCountProducts(1451));
console.log(getCountProducts(790));
console.log(getCountProducts(212));
console.log(getCountProducts(11));
console.log(getCountProducts(13));
console.log(getCountProducts(15));
console.log(getCountProducts(32));
console.log(getCountProducts(714));
console.log(getCountProducts(89213));
console.log(getCountProducts(21));
console.log(getCountProducts(2));

// task 2

function getArrayOfRange(start, range, step = 1) {
    let array = [];
    if (start < range) {
        for (let i = start; i <= range; i += step) array.push(i);
    } else {
        for (let i = start; i >= range; i -= step) array.push(i);
    }
    return array;
}

console.log(getArrayOfRange(5, 125, 25));
console.log(getArrayOfRange(-5, 3));
console.log(getArrayOfRange(25, -3, 3));
console.log(getArrayOfRange(4, -2));