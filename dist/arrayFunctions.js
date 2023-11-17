"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function getArray(array) {
    let size = parseInt(prompt('enter size of the array'));
    console.log('Enter array elements');
    for (let i = 0; i < size; i++) {
        array.push(parseInt(prompt('')));
    }
}
function displayArray(array) {
    console.log(array);
}
let array = [];
getArray(array);
displayArray(array);
