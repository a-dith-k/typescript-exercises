"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let num1 = prompt('Enter first number');
let num2 = prompt('Enter second number');
let result = parseInt(num1) + parseInt(num2);
console
    .log("sum of the numbers is: " + result);
