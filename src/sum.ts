import promptSync from 'prompt-sync'

const prompt=promptSync();

let num1:string
    =prompt('Enter first number');
let num2:string
    =prompt('Enter second number');
let result
    =parseInt(num1)+parseInt(num2);
console
    .log("sum of the numbers is: "+result);
