"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let array1 = [];
let array2 = [];
let limit = parseInt(prompt('Enter size of Array'));
console.log(`Enter ${limit} elements of first array`);
writeArrayElements(array1);
console.log(`Enter ${limit} elements of second array`);
writeArrayElements(array2);
swapArray(array1, array2);
console.log("Elements of Array 1 are");
readArrayElements(array1);
console.log("Elements of Array 2 are");
readArrayElements(array2);
function readArrayElements(array) {
    console.log(array);
}
function swapArray(array1, array2) {
    for (let i = 0; i < limit; i++) {
        let temp = array1[i];
        array1[i] = array2[i];
        array2[i] = temp;
    }
}
function writeArrayElements(array) {
    for (let i = 1; i <= limit; i++) {
        array.push(parseInt(prompt('')));
    }
}
