"use strict";

// lesson 6 task 1

let dayOfWeek = function (day) {
    switch (day) {
        case 1: return "Понедельник";
        case 2: return "Вторник";
        case 3: return "Среда";
        case 4: return "Четверг";
        case 5: return "Пятница";
        case 6: return "Суббота";
        case 7: return "Воскресенье";
        default: return "Вы ввели некорректное значение";
    }
}

console.log(dayOfWeek(2));
console.log(dayOfWeek(6));
console.log(dayOfWeek(25));

// lesson 6 task 2

let arrayWithoutRepeat = [];

function addOriginalValue(newValue) {
    for (let i = 0; i < arrayWithoutRepeat.length; i++) {
        if (arrayWithoutRepeat[i] == newValue) return;
    }
    return arrayWithoutRepeat.push(newValue);
}

addOriginalValue(455);
addOriginalValue(45);
addOriginalValue(24);
addOriginalValue(4);
addOriginalValue(45);
addOriginalValue(4);
addOriginalValue(444);
addOriginalValue(45);
addOriginalValue(45);
addOriginalValue(28);

console.log(arrayWithoutRepeat);

// lesson 6 task 3

function randoms (array, returnElem) {
    let totalArr = [];
    for (let i = 0; i < returnElem; i++) {
        totalArr.push(array[Math.floor(Math.random() * array.length)]);
    }
    return totalArr;
}

console.log(randoms([41, 23, 13, 400, 53, 9, 83, 24, 100], 3));

// lesson 6 task 4

let text = "самое длинное слово в предложении";
let arrOfWords = text.split(" ");

let sortDesc = arrOfWords.sort(function (a, b) {
    return b.length - a.length;
});

// let sortDesc = arrOfWords.sort((a, b) => b.length - a.length );

console.log(sortDesc[0]);

// lesson 6 task 5

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];

let filteredArray = first.filter(value => second.includes(value));

console.log(filteredArray);

// lesson 6 task 6

let temps = [
     [344, 241, 521, 344, 121],
     [111, 313, 351, 314],
     [134, 111, 452],
  ];

for (let i = 0; i < temps.length; i++) {
    if (temps[i].some(temp => temp >= 500)) {
     console.log("В массиве есть температура больше 500");
    }
}

// lesson 6 task 6

function firstLetUpper(str) {
    //if (!str) return str;
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

console.log(firstLetUpper('HeLLO'));
console.log(firstLetUpper('hellO'));





// lesson 5 task 3

let numsArr = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];

let numsArr10 = numsArr.map(arr => arr.map(num => (num + 10)));

let numsArrPlus = [];

for (let i = numsArr.length - 1; i >= 0; i--) {
   numsArrPlus.push(numsArr[i].filter(num => (num >= 0)));
}

var merged = [].concat.apply([], numsArrPlus);

 console.log(numsArr10);
 //console.log(numsArrPlus);
 console.log(merged);
