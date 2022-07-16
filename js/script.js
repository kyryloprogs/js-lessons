"use strict";

// let number = 5;
// const leftBorderWidth = 1;


// number = 10;
// console.log(number);
    

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);

// var name = 'Ivan';

// {
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



let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");


document.write();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


personalMovieDB.count = numberOfFilms;

let movieName = prompt("Название фильма");
let movieScore = prompt("Оценка фильма");
personalMovieDB.movies[`${movieName}`] = movieScore;

console.log(personalMovieDB);
