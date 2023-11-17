import promptSync from "prompt-sync"

const prompt =promptSync();

let number:string=prompt('Enter the number');

printMultiplicationTable(parseInt(number));
function printMultiplicationTable(number: number){
    for(let i=1; i<=10; i++){
        console.log(`${i}X${number}=${number*i}`);
    }
}