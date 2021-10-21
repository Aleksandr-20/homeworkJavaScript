"use strict";

let count = 93;

if (count <= 100 && count >= 90) {
	console.log("отлично");
} else if (count <= 89 && count >= 60) {
	console.log("хорошо");
} else if (count <= 59 && count >= 40) {
	console.log("удовлетворительно");
} else if (count <= 39 && count >= 0) {
	console.log("попробуйте еще раз");
} else {
	console.log("");
}
