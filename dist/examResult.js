"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let mark = prompt("Enter your mark");
console
    .log(getResult(parseInt(mark)));
function getResult(mark) {
    if (mark >= 50 && mark <= 100)
        return "Passed";
    else if (mark >= 0 && mark <= 49)
        return "Failed";
    else
        return "Enter valid mark";
}
