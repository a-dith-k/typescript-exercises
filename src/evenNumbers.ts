import promptSync from 'prompt-sync'

const prompt=promptSync();

let array:number[]=[];

function writeToArray(a:number[],limit:number){
    for(let i=0; i<limit; i++){
        a.push(parseInt(prompt('')));
    }
}
function findCountOfEvenElements(array: number[]) {
    let count=0;
    for(let i=0; i<array.length; i++) {
        if(array[i]%2===0)
            count++;
    }
    return count;
}

let arraySize
    =parseInt(prompt('Enter the size of array'));

console
    .log(`enter the ${arraySize}  elements of the array`);
writeToArray(array,arraySize);
let evenCount
    =findCountOfEvenElements(array);
console
    .log(`Number of even elements in array is ${evenCount}`)





