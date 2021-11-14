"use strict";

// task 1

let loginCity = new Map();

loginCity.set("otis", "Дюссельдорф")
         .set("eric", "Дюссельдорф")
         .set("adam", "Мальмё")
         .set("ola", "Мальмё")
         .set("maeve", "Мальмё")
         .set("aimee", "Дюссельдорф")
         .set("lily", "Дюссельдорф");

// console.log(loginCity);

 function getLogins(map, city) {
   let logins = [];
   for (let pair of map) {
      if (pair[1] === city) logins.push(pair[0]);
   }
   return logins;
} 

console.log(getLogins(loginCity, "Дюссельдорф"));

// task 2

function getMap(arr) {
   let map = new Map();
   for (let elem of arr) {
      if (map.has(elem)) {
         let newVal = map.get(elem) + 1;
         map.set(elem, newVal);
         // map.set(elem, map.get(elem) + 1)
      } else {
         map.set(elem, 1);
      }
   }
   return map;
}

let months = ["may", "june", "april", "may", "may", "june"];

console.log(getMap(months));

// task 3

let customerMap = new Map();
  customerMap.set(45, {name: "Павел", id: 45, age: 23});
  customerMap.set(87, {name: "Олег", id: 87, age: 45});
  customerMap.set(91, {name: "Максим", id: 91, age: 18});
  customerMap.set(99, {name: "Евгения", id: 99, age: 66});
  customerMap.set(101, {name: "Алексей", id: 101, age: 34});
  customerMap.set(112, {name: "Клара", id: 112, age: 39});

  // console.log(customerMap);

  function getMapRangeAges(map, ageFrom, ageTo) {
     let newMap = new Map();
     for (let value of map) {
         if (value[1].age >= ageFrom && value[1].age < ageTo) {
            newMap.set(value[0], value[1]);
         }
     }
     return newMap;
  }

  console.log(getMapRangeAges(customerMap, 30, 66));