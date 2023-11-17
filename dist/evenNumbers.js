"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let array = [];
function writeToArray(a, limit) {
    for (let i = 0; i < limit; i++) {
        a.push(parseInt(prompt('')));
    }
}
function findCountOfEvenElements(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
            count++;
    }
    return count;
}
let arraySize = parseInt(prompt('Enter the size of array'));
console
    .log(`enter the ${arraySize}  elements of the array`);
writeToArray(array, arraySize);
let evenCount = findCountOfEvenElements(array);
console
    .log(`Number of even elements in array is ${evenCount}`);
