"use strict";

// task 1

  let animals = [
     {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, "passport": true}
     },
     {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": false}
     },
     {
        "name": "Макс",
        "age": 5,
        "color": "серый",
        "additional_info": {"vaccinations": false, "passport": true}
     },
     {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, "passport": true}
     }
  ];         

// массив объектов animals = [ { .., .., .., {} }, { .., .., .., {} }, { .., .., .., {} }, { .., .., .., {} } ]

let animalsSection = document.querySelector(".animals-section");

function addAnimals(animalsArr, element) {
   for (let animal of animalsArr) {
      let cardAnimal = document.createElement("div");
      cardAnimal.classList.add("card-animal");

      let nameAnimal = document.createElement("h2");
      nameAnimal.innerText = `${animal.name}`;

      let ageAnimal = document.createElement("span");
      ageAnimal.classList.add("age-animal");
      // ageAnimal.innerText = `${animal.age}`;

      // if (!isNaN(animal.age)) {
      //    ageAnimal.innerText = `${animal.age} года`;
      // } else {
      //    ageAnimal.innerText = `${animal.age}`;
      // }

      if (!isNaN(animal.age)) {
            if (animal.age % 10 === 1 && animal.age !== 11) {
               ageAnimal.innerText = `${animal.age} год`;
            } else if ((animal.age % 10 === 2 && animal.age % 100 !== 12) 
               || (animal.age % 10 === 3  && animal.age % 100 !== 13) 
               || (animal.age % 10 === 4  && animal.age % 100 !== 14)) {
               ageAnimal.innerText = `${animal.age} года`;
            } else {
               ageAnimal.innerText = `${animal.age} лет`;
            }     
      } else {
          ageAnimal.innerText = `${animal.age}`;
      }

      let colorAnimal = document.createElement("p");
      colorAnimal.classList.add("color-animal");
      colorAnimal.innerText = `${animal.color}`;

      let additionalInfo = document.createElement("div");
      additionalInfo.classList.add("additional-info");

      let passport = document.createElement("span");
      passport.classList.add("passport");

      let vaccinations = document.createElement("span");
      vaccinations.classList.add("vaccinations");

      if (animal.additional_info.passport === true) {
         passport.innerHTML = `
            <span>Паспорт: есть</span><br>
            `;
      } else {
         passport.innerHTML = `
            <span>Паспорт: нет</span><br>
            `;
      }

      if (animal.additional_info.vaccinations === true) {
         vaccinations.innerHTML = `
            <span>Вакцинация: есть</span><br>
            `;
      } else {
         vaccinations.innerHTML = `
            <span>Вакцинация: нет</span><br>
            `;
      }

   additionalInfo.append(vaccinations, passport);
   cardAnimal.append(nameAnimal, ageAnimal, colorAnimal, additionalInfo);
   animalsSection.append(cardAnimal);

   }
}

addAnimals(animals, animalsSection);

// task 2

let articles = [
     {
         id: 1,
         title: "JS",
         text: "About JS",
         author: "Max"
     },
     {
         id: 2,
         title: "PHP",
         text: "About PHP",
         author: "Ivan"
     },
     {
         id: 3,
         title: "DataBase",
         text: "About DB",
         author: "Paul"
     },
     {
         id: 4,
         title: "HTML",
         text: "About HTML",
         author: "Paul"
     }
 ];

 let goods = [
     {
         title: "Piano",
         price: 3000,
         count: 25
     },
     {
         title: "Guitar",
         price: 1200,
         count: 40
     },
     {
         title: "Drum",
         price: 2700,
         count: 12
     },
     {
         title: "Flute",
         price: 900,
         count: 50
     },
     {
         title: "Harp",
         price: 3400,
         count: 5
     }
 ];

let tablesSection = document.querySelector(".tables-section");

function generateTable(arr) {
   // создаем table
   let table = document.createElement("table");
   table.classList.add("table");

   // добавляем строку заголовков в table 1 раз
   let rowOfThead = table.insertRow();
   rowOfThead.classList.add("row-thead");

   // ключи объектов - это данные ячеек-заголовков table
   // можно брать любой объект (0,1,2 и тд), чтоб сформировать 1-ю строку таблицы
   for (let key in arr[0]) {
      // в перменной key - Название. 1-й ряд таблицы - заголовки
      // добавляем данные в ячейки-заголовки в строку заголовков rowOfThead

      let dateOfThead = rowOfThead.insertCell();
      dateOfThead.innerText = key.toUpperCase();
   }

   // генерация рядов (один объект)
   // значения объектов - это данные ячеек table
   for (let obj of arr) {
      // создание ряда insertRow - добавляем строки в table
      let tr = table.insertRow();
      tr.classList.add("row-table");

      // добавляем данные в ячейки строк в table
      for (let elem in obj) {
         // создание ячейки insertCell
         // текст ячейки: obj[elem]
         let td = tr.insertCell();
         td.innerText = obj[elem]; /*`${elem}`*/
      }
   }

   // добавим таблицу в секцию html
   tablesSection.append(table);
 }

 generateTable(goods); // генерация таблицы с товарами
 generateTable(articles); // генерация таблицы со статьями

 // task 3

let prises = {
   headphones: "Наушники",
   book: "Книга",
   postcard: "Открытка"
};

let generateFieldSection = document.querySelector(".generate-field-section");

function generateField(n) {
   if (n < 3 || isNaN(n)) {
      console.log("Введенное значение некорректно!");
      return;
   }

   let table = document.createElement("table");
   table.classList.add("field-table");

   for (let i = 0; i < n; i++) {
      let tr = table.insertRow();
      tr.classList.add("row-field-table");

      for (let j = 0; j < n; j++) {
         let td = tr.insertCell();
         td.classList.add("date-field-table");
      }
   }

   generateFieldSection.append(table);

   let createArrayRandNum = () => {
      let arrNumberRandomCell = [];
      while (arrNumberRandomCell.length < 3) {
         let numberRandomCell = Math.floor(Math.random() * (n*n - 0)) + 0;
         if (arrNumberRandomCell.indexOf(numberRandomCell) > -1) continue;
         arrNumberRandomCell[arrNumberRandomCell.length] = numberRandomCell;
      }
      return arrNumberRandomCell;
   };

   // console.log(createArrayRandNum()[0]);
   // console.log(createArrayRandNum()[1]);
   // console.log(createArrayRandNum()[2]);

   let valueOfCell = document.getElementsByClassName("date-field-table");
   valueOfCell[createArrayRandNum()[0]].innerText = `${prises.headphones}`;
   valueOfCell[createArrayRandNum()[1]].innerText = `${prises.book}`;
   valueOfCell[createArrayRandNum()[2]].innerText = `${prises.postcard}`; 
}

generateField(4);