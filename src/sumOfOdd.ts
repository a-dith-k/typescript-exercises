import promptSync from "prompt-sync"

const prompt=promptSync();
let limit:string
    =prompt('Enter the limit');

console
    .log(`sum of Odd numbers between ${0} and ${limit} is ${getSumOfOddNumberInLimit(parseInt(limit))}`)

function getSumOfOddNumberInLimit(limit:number):number{
    let sum=0;
    for(let i = 0; i < limit; i++){
        if(i%2!=0)
            sum+=i;
    }
    return sum;
}