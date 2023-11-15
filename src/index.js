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
    console.log("Hello ".concat(person, " today is ").concat(date.toDateString()));
    return "Hello";
}
