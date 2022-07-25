/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Задание 1
const marketSelector = document.querySelectorAll('.promo__adv img');

marketSelector.forEach(item => {
    item.remove();
});
// marketSelector.remove();


// Задание 2
const genreSelector = document.querySelector('.promo__bg'),
    newGenreSelector = genreSelector.querySelector('.promo__genre');

newGenreSelector.textContent = "ДРАМА";


// Задание 3
document.querySelector(".promo__bg").style.background = 'url(../img/bg.jpg)';


// Задание 4
let temp = "";
movieDB.movies.sort().forEach((item, index) => {
    temp += `<li class="promo__interactive-item">${index+1}. ${item} <div class = "delete"></div></li>`;
});

document.querySelector(".promo__interactive-list").innerHTML = temp;

// Задание 5