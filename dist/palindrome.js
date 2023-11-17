"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let word = prompt('Enter the word');
word = word.trim();
function isPalindrome(word) {
    let i = 0;
    let j = word.length - 1;
    while (i != j) {
        if (word[j] != word[i]) {
            return "Not a Palindrome";
        }
        i++;
        j--;
    }
    return "is a Palindrome";
}
console.log(isPalindrome(word));
