"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let limit = prompt('Enter the limit');
console
    .log(`sum of Odd numbers between ${0} and ${limit} is ${getSumOfOddNumberInLimit(parseInt(limit))}`);
function getSumOfOddNumberInLimit(limit) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 2 != 0)
            sum += i;
    }
    return sum;
}
