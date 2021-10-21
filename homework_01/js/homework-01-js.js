"use strict";

// площадь прямоугольного параллелепипеда

let height = 2;
let length = 4;
let width = 3;
let areaParal = 2 * (height * length + height * width + length * width);

console.log(areaParal);

// сумма двузначного числа

const number = 43;
const secondDigit = number % 10;
const firstDigit = (number - secondDigit) / 10;
const sum = firstDigit + secondDigit;

console.log(sum);

// поменять значение двух переменных

let a = 7;
let b = 3;

a -= b; // 4
b += a // 7 
a = b - a // 3

console.log(a, b);
