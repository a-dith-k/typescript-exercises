"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function isPrime(num) {
    if (num == 1)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
let inputNumber = parseInt(prompt('Enter the number'));
if (isPrime(inputNumber))
    console.log(`${inputNumber} is prime number`);
else
    console.log(`${inputNumber} is not a prime number`);
