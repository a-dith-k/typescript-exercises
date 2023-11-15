"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let principalAmount = prompt("Enter the principal amount");
let interestRate = prompt("Enter the  Interest Rate");
let noOfYears = prompt("Enter the number of years");
let simpleInterest = getSimpleInterest(parseInt(principalAmount), parseInt(interestRate), parseInt(noOfYears));
console.log("Simple Interest is: " + simpleInterest);
function getSimpleInterest(principalAmount, interestRate, noOfYears) {
    return (principalAmount * interestRate * noOfYears) / 100;
}
