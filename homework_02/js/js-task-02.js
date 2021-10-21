"use strict";

let operand1 = parseInt(prompt("Введите первый операнд"));
let operand2 = parseInt(prompt("Введите второй операнд"));
let operator = prompt("Введите оператор");

switch (operator) {
   case "+":
      console.log(operand1 + operand2);
      break;
   case "-":
      console.log(operand1 + operand2);
      break;
   case "*":
      console.log(operand1 * operand2);
      break;
   case "/":
      console.log(operand1 / operand2);
      break;
   default:
      console.log("Некорректный ввод");
}