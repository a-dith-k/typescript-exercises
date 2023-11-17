"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function writeToArray(array, size) {
    for (let i = 0; i < size; i++) {
        let a = [];
        for (let j = 0; j < size; j++) {
            a.push(parseInt(prompt(`element[${i}][${j}]: `).trim()));
        }
        array.push(a);
    }
}
function addArrays(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let a = [];
        for (let j = 0; j < array1[i].length; j++) {
            a.push(array2[i][j] + array1[i][j]);
        }
        result.push(a);
    }
    return result;
}
let array1 = [];
let array2 = [];
let arraySize = parseInt(prompt('enter array size'));
console.log('Enter array1 elements');
writeToArray(array1, arraySize);
console.log('Enter array2 elements');
writeToArray(array2, arraySize);
console
    .log(addArrays(array1, array2));
