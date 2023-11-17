"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let c = prompt("Enter a Character");
console
    .log(`The character you entered is ${c}`);
greet("Adith", new Date());
function greet(person, date) {
    console.log(`Hello ${person} today is ${date.toDateString()}`);
}
let user = "SA";
console.log(typeof (user));
let newA = [1, 2, 3, 4, 5];
let s = [1, 2, 3, 3, 3];
s.forEach(function (s) {
    console.log(s.toLocaleString());
});
