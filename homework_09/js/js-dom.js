"use strict";

// items-section: Добавить изображения после h2

let images = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/1000/1000?random=3"
];

// по имени класса получили коллекцию h2
let itemsTitles = document.getElementsByClassName("item_title");
// let itemsTitles = document.querySelectorAll(".item_title");
console.log(itemsTitles);
// HTMLCollection [h2, h2, h2] мы ее перебир.
// на каждой итерации обращаемся к индексу 0, 1, 2, у кажд. вызыв. метод after и 
// после каждого доб. img
for (let i = 0; i < itemsTitles.length; i++) {
   let img = document.createElement("img"); // создали эл-т img, ссыл.на него по имени переменной
   img.setAttribute("src", images[i]);
   // item__img
   img.classList.add("item__img");
   // после каждого тега h2 доб. img
   itemsTitles[i].after(img);
}

// items-section: уменьшить стоимость в два раза
// получили html-коллекцию
let prices = document.querySelectorAll(".item__price");

// метод from делает массив из html-коллекции
prices = Array.from(prices);
// метод фореч перебирает и вызывает ф-ю на каждой итерации
// меняем текст у span
// все арифм. операции (кроме +) приводят операнды к числам
//  если не могут привести, возвращ. NaN
prices.forEach((span) => span.innerText = span.innerText / 2);

// коротко
// Array.from(document.querySelectorAll(".item__price"))
//      .forEach((span) => span.innerText = span.innerText / 2);

// теперь то же самое не стрелочно

/* let fn = function (element, index, arr) {
   element.innerText = element.innerText / 2;
};

for (let i = 0; i < spans.length; i++) {
   // fn(spans[i], i, spans); // можно вообще без ф-ии
   spans[i].innerText = spans[i].innerText / 2;
} */

// cards-section: отобразить информацию о товарах, информацию о каждом товаре отображать в отдельном div:
// объект нам не нужен, для каждого значения необх.созд.див

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

/* <div class="card">
    <h2></h2> название
    <img class="card__image" src=""> изображение
    <p></p> стоимость
    <div class="card__count-info">
        <button>-</button>
        <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
        <button>+</button>
    </div>
</div> */

// могли бы сделать методом for..in
let cardSection = document.querySelector(".cards-section");
// [{}, {}, {}, {}, {}]

Object.values(goods).forEach((obj) => {
   let card = document.createElement("div");
   card.classList.add("card"); // Ни к чему не привязан, никуда не добавлен (ни js, ни html)

   let title = document.createElement("h2");
   title.innerText = obj.title;

   let img = document.createElement("img");
   img.classList.add("card__image");
   img.setAttribute("src", obj.img);

   let price = document.createElement("p");
   price.innerText = `${obj.price} руб.`;

   let count = document.createElement("div");
   count.classList.add("card__count-info");
   if (obj.count > 0) {
      // innerHTML исп.для добавления HTML (вставка тегов)
      // innerHTML всегда перезапись. Он сначала уберет из эл-та все, что там есть
      // и только после этого, добавит
      // на каждой итерации будет создан пустой див и иннерХТМЛ добавит туда данные
      // обратные кавычки для переноса строк
      count.innerHTML = `
         <button>-</button>
         <span>0</span> 
         <button>+</button>
      `;
   } else {
      count.innerHTML = "<span>Нет в наличии</span>";
   }
   // сначала в card вложить h2, img, p, span
   // потом card доб.в секцию со всем его содержимым
   // эти элементы пока только в js

   card.append(title, img, price, count); // card сущ.только в JS
   cardSection.append(card); // в секцию добавляем дивы по очереди (в html)
});


// books-section: отобразить информацию о книгах
/*
для каждого жанра отдельный div:
<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>
*/
let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

let booksSection = document.querySelector(".books-section");

function addBooks(booksArr, element){
    // перебор booksArr:
    for (let book of booksArr) {
        // создать div
        let booksGenre = document.createElement("div");
        booksGenre.classList.add("books-genre");

        // создать h2
        let titleGenre = document.createElement("h2");
        titleGenre.innerText = book.genreName;

        // создать div class="books"
        let books = document.createElement("div");
        books.classList.add("books");

        // добавить h2 и div class="books" в div
        booksGenre.append(titleGenre, books);

        // перебор booksArr.books
        for (let obj of book.books) {
            // создать article, добавить содержимое через innerHTML
            let article = document.createElement("article");
            article.innerHTML = `
                <span>${obj.title}</span>
                <img src="${obj.img}" alt="обложка">
                <p>${obj.description}</p>
                <a href="#">Читать</a>
            `;
            // добавить article в div
            books.append(article);
        }
        // доб. div без класса в секцию с классом "books-section"
        booksSection.append(booksGenre);
    }
}
// вызов функции
addBooks(booksByGenre, booksSection);