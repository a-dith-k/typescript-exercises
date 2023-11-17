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
function readArray(array) {
    console.log(array);
}
function sortArrayDescending(array) {
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] < array[j]) {
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}
let arraySize = parseInt(prompt('Enter the size of array'));
console
    .log(`enter the ${arraySize}  elements of the array`);
writeToArray(array, arraySize);
sortArrayDescending(array);
readArray(array);
