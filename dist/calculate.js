"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Operations_1 = require("./Operations");
const op = new Operations_1.Operations();
let num1 = parseInt(prompt('Enter the first Number'));
let num2 = parseInt(prompt('Enter the second Number'));
console.log('Choose and Option number to perform');
console.log('1.Addition');
console.log('2.Subtraction');
console.log('3.Multiplication');
console.log('4.Division');
let choice = prompt('enter the number: ');
switch (choice) {
    case '1':
        console.log(op.addition(num1, num2));
        break;
    case '2':
        console.log(op.subtraction(num1, num2));
        break;
    case '3':
        console.log(op.multiplication(num1, num2));
        break;
    case '4':
        console.log(op.division(num1, num2));
        break;
}
