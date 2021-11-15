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

// document.write(addAnimals(animals));
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

 
 // generateTable(articles); // генерация таблицы со статьями
 // generateTable(goods); // генерация таблицы с товарами
