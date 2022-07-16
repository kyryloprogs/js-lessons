"use strict";


// }

// console.log(result);


// console.log('Hello world');
// console.log(123);
// console.log(true);

// var greeting = 'Hello'

// console.log(greeting)

// var numbers = [1,2,3,4]
// console.log(numbers)

// numbers.push(1);

// var val = 'That\'s awesome, I can\'t wait';
// console.log(numbers);
// console.log(val);
// console.log({a:1, b:2})


// const greet = {
//     add: function(){
//         console.log(`Add`);  
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);    
//     }
// }


// greet.add()

// greet.edit(22);


let doc = 1;



let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// personalMovieDB.count = ;


for (let i = 0; i < 2; i++) {
    const   movieName = prompt("Название фильма", ""),
            movieScore = prompt("Оценка фильма");
    if (movieName != null && movieScore != null && movieName != '' && movieScore != '' && movieName.length < 50) {
        personalMovieDB.movies[movieName] = movieScore;
    }
    else {
        i--;
    }    
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("Вы мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы средне фильмов");
} else if (personalMovieDB.count > 30) {
    alert("Вы много фильмов");
} else {
    alert("Ошибка");
}