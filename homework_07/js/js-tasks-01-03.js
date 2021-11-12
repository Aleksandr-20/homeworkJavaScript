"use strict";

// task 1

  let goods = { 
     piano: { 
        title: "Пианино", 
        price: 3000, 
        count: 25 
     }, 
     guitar: { 
        title: "Гитара", 
        price: 1200, 
        count: 40 
     },
     drum: { 
        title: "Барабаны", 
        price: 2700, 
        count: 12 
     }, 
     flute: { 
        title: "Флейта", 
        price: 900, 
        count: 50 }, 
     harp: { 
        title: "Арфа", 
        price: 3400, 
        count: 5 
     } 
  };

function getNewObject(obj, from, to) {
   if (typeof obj !== 'object' || isNaN(from) || isNaN(to)) return;
   let newGoods = {};  
   for (let elem in obj) {
      if (obj[elem].price >= from && obj[elem].price < to) {
         newGoods[elem] = obj[elem];
      }
     }
     return newGoods;
   }

console.log(getNewObject(goods, 900, 3000));
// console.log(getNewObject(0, "str", 3000));


// task 2

  function get(obj, title, countToCart) {
     if (typeof obj !== 'object' || isNaN(countToCart) || typeof title !== 'string') return false;

     for (let product in obj) {
         if (obj[product].title === title) {
            if (obj[product].count >= countToCart) {
             obj[product].count -= countToCart;
             return true;
             // return goods;
            } else {
               return false;
            }
         }
     };
   }

   console.log(get(goods, "Арфа", 2));

// task 3

let books = [
   { author: 'Пушкин', title: 'Пир во время чумы'}, 
   { author: 'Толстой', title: 'Война и мир'}, 
   { author: 'Лермонтов', title: 'Тамань'}, 
   { author: 'Гончаров', title: 'Обломов'}, 
   { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
   { author: 'Пушкин', title: 'Руслан и Людмила'}, 
   { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function getAuthors(obj, author) {
   let authorsBooks = [];
   for (let book of obj) {
      if (book.author === author) authorsBooks.push(book.title);
   }
   return authorsBooks;
}

console.log(getAuthors(books, 'Гончаров'));
console.log(getAuthors(books, 'Лермонтов'));