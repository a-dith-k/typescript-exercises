import promptSync from "prompt-sync"

const prompt=promptSync();

function isPrime(num:number):boolean{
    if(num==1)
        return false;

    for(let i = 2; i < num; i++){
        if(num%i==0)
            return false;

    }
    return true;
}

let inputNumber
    =parseInt(prompt('Enter the number'));

if(isPrime(inputNumber))
    console.log(`${inputNumber} is prime number`);
else
    console.log(`${inputNumber} is not a prime number`);

