"use strict";

// task 1

let nums = [
     [23, 56, 75, -90, 123],
     [17, 0, -6429, -122],
     [19, 86, 55, -3, 900, 0, 0],
     [4, 9, -2]
  ];

  let summ = 0;
  let count = 0;

  for (let arr of nums) {
  	for (let i = 0; i < arr.length; i++) {
  			arr[i] += 10;
  			summ += arr[i];
  			count++;
  		}
  	}

  console.log(nums, summ/count);

  // task 2

  let arr = [];

  for (let i = 0; i < 7; i++) {
     arr[i] = Math.floor(Math.random() * (301 - 5)) + 5;
  }

  console.log(arr);

  let min = arr[0];
  let max = min;
  for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
  }

  // console.log(min, max);

  let indexMin = arr.indexOf(min);
  let indexMax = arr.indexOf(max);

  //console.log(indexMin, indexMax);

  arr[indexMin] = max;
  arr[indexMax] = min;

  console.log(arr);

  // task 3

let array = [-57, -1, 0, 120, -12, -57, 57, 90, 90, 0, -1209];
let newArray = [];
for (let index = array.length - 1; index >= 0; index--) {
   if (elem < 0) {
      newArray.push(elem);
   }
}

console.log(array);
console.log(newArray);

// task 4

let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let enterLogin;
while (!logins.includes(enterLogin)) {
     enterLogin = prompt("Введите логин");
}

alert("Отлично!");

// task 5

enterLogin = prompt("Введите логин");
while (logins.includes(enterLogin)) {
     enterLogin = prompt("Придумайте другой логин");
}

logins.push(enterLogin);

console.log(logins);