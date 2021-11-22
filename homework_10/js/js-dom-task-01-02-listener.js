"use strict";

 // task 1

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
   table.id = "field-table";
   // table.classList.add("field-table");

   let nameField = document.createElement("h2");
   nameField.innerText = "Выбор приза";

   // let caption = document.createElement("caption");
   // caption.innerText = `Выбор подарка`;
   // caption.append(table);

   for (let i = 0; i < n; i++) {
      let tr = table.insertRow();
      tr.classList.add("row-field-table");

      for (let j = 0; j < n; j++) {
         let td = tr.insertCell();
         td.classList.add("date-field-table");
      }
   }

   generateFieldSection.append(nameField, table);

   let createArrayRandNum = () => {
      let arrNumberRandomCell = [];
      while (arrNumberRandomCell.length < 3) {
         let numberRandomCell = Math.floor(Math.random() * (n*n - 0)) + 0;
         if (arrNumberRandomCell.indexOf(numberRandomCell) > -1) continue;
         arrNumberRandomCell[arrNumberRandomCell.length] = numberRandomCell;
      }
      return arrNumberRandomCell;
   };

   let valueOfCell = document.getElementsByClassName("date-field-table");
   valueOfCell[createArrayRandNum()[0]].setAttribute("data-prise", prises.headphones);
   valueOfCell[createArrayRandNum()[1]].setAttribute("data-prise", prises.book);
   valueOfCell[createArrayRandNum()[2]].setAttribute("data-prise", prises.postcard);
}

generateField(3);

document.getElementById("field-table").addEventListener("click", showPrise);

function showPrise(event) {
   let clickElem = event.target;
   let presentValue = clickElem.dataset.prise;

   let attempts = 1;

   while (attempts !== 3) {
      if (presentValue !== undefined) {
         clickElem.innerText = presentValue;

         clickElem.style.cssText = 
            `background-color: orange;
            color: green;`;

         this.removeEventListener('click', showPrise);
      } else if (attempts === 0) {
         this.removeEventListener('click', showPrise);    
      } else {
         clickElem.innerText = "Вы не выиграли приз";
         clickElem.style.cssText = 
            `background-color: gray;`;
         //this.removeEventListener('click', showPrise);
      }
      attempts ++;
   }
   // alert("Игра окончена");
}

// task 2

let goods = {
   piano: {
       title: "Пианино",
       price: 3000,
       count: 0,
       img: "https://picsum.photos/id/345/1000"
   },
   guitar: {
       title: "Гитара",
       price: 1200,
       count: 40,
       img: "https://picsum.photos/id/988/1000"
   },
   drum: {
       title: "Барабаны",
       price: 2700,
       count: 12,
       img: "https://picsum.photos/id/123/1000"
   },
   flute: {
       title: "Флейта",
       price: 900,
       count: 0,
       img: "https://picsum.photos/id/162/1000"
   },
   harp: {
       title: "Арфа",
       price: 3400,
       count: 5,
       img: "https://picsum.photos/id/163/1000"
   }
};
/*
<div class="card">
   <h2></h2> название
   <img class="card__image" src=""> изображение
   <p></p> стоимость
   <div class="card__count-info">
    <button>-</button>
     <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
     <button>+</button>
   </div>
</div>
*/
let cardsSection = document.querySelector(".cards-section");
// [{}, {}, {}, {}, {}]
Object.values(goods).forEach((obj)=>{
   let card = document.createElement("div");
   card.classList.add("card");

   let title = document.createElement("h2");
   title.innerText = obj.title;

   let img = document.createElement("img");
   img.classList.add("card__image");
   img.setAttribute("src", obj.img);

   let price = document.createElement("p");
   price.innerText = `${obj.price} руб.`;
   /*<div class="card__count-info">
       <button>-</button>
       <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
       <button>+</button>
   </div>*/
   let count = document.createElement("div");
   count.classList.add("card__count-info");
   if (obj.count > 0) {
       count.innerHTML = `
           <button>-</button>
           <span>0</span>
           <button>+</button>
       `;
   } else {
       count.innerHTML = "<span>Нет в наличии</span>";
   }
   card.append(title, img, price, count);
   cardsSection.append(card);
});