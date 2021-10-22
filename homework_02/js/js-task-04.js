"use strict";

let userNum, programNum = Math.floor(Math.random() * 9) + 1; // от 1 до 9

// let userNum, programNum = Math.floor(Math.random() * 10); // от 0 до 9

while (userNum = parseInt(prompt("Введите число от 1 до 9"))) {

      if (programNum > userNum) {
      console.log("загаданное число больше");
   } else if (programNum < userNum) {
      console.log("загаданное число меньше");
   } else if (programNum === userNum) {
      console.log("Вы угадали");
      break;
   }
   // else if (userNum === 0) {
   //    console.log("выход из программы");
   //    break;
   // }
}

if (userNum === 0) {
   console.log("выход из программы");
   // break;
}