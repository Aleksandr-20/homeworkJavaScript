"use strict";

let plates = parseInt(prompt("Введите количество тарелок"));
let detergent = parseInt(prompt("Введите количество моющего средства"));

while (plates > 0 && detergent > 0) {
   plates--;
   detergent -= .5;
   console.log("Моющего средства осталось: " + detergent);
}

if (plates === 0) {
   console.log("Все тарелки вымыты. Моющего средства осталось: " + detergent)
} else {
   console.log("Моющее средство закончилось. Не вымытых тарелок осталось: " + plates)
}