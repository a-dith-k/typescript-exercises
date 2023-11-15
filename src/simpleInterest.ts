import promptSync from "prompt-sync"

const prompt=promptSync();

let principalAmount:string
    =prompt("Enter the principal amount");
let interestRate:string
    =prompt("Enter the  Interest Rate");
let noOfYears:string
    =prompt("Enter the number of years");

let simpleInterest:number
    =getSimpleInterest(parseInt(principalAmount),parseInt(interestRate),parseInt(noOfYears))

console.log("Simple Interest is: "+simpleInterest);
function getSimpleInterest(principalAmount:number,
                           interestRate:number,
                           noOfYears:number):number{
    return (principalAmount*interestRate*noOfYears)/100;
}