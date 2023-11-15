"use strict";
// import promptSync from 'prompt-sync';
//
// const prompt
//     = promptSync();
// let c:string
//     =prompt("Enter a Character");
// console
//     .log(`The character you entered is ${c}`)
greet("Adith", new Date());
function greet(person, date) {
    console.log(`Hello ${person} today is ${date.toDateString()}`);
}
let user = "SA";
console.log(typeof (user));
let newA = [1, 2, 3, 4, 5];
let s = [1, 2, 3, 3, 3];
s.forEach(function (s) {
    console.log(s.toLocaleString());
});
