import promptSync from "prompt-sync"
const prompt=promptSync();
import {Operations} from "./Operations";

const op=new Operations();

let num1=parseInt(prompt('Enter the first Number'));
let num2=parseInt(prompt('Enter the second Number'));
console.log('Choose and Option number to perform');
console.log('1.Addition')
console.log('2.Subtraction')
console.log('3.Multiplication')
console.log('4.Division')
let choice=prompt('enter the number: ');

switch (choice) {
    case '1' :
        console.log(op.addition(num1,num2));
                break;
    case '2' :
        console.log(op.subtraction(num1,num2));
        break;
    case '3' :
        console.log(op.multiplication(num1,num2));
        break;
    case '4' :
        console.log(op.division(num1,num2));
        break;
}