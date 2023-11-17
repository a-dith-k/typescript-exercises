import promptSync from 'prompt-sync'

const prompt=promptSync();

function writeToArray(array:number[][],size:number){
    for(let i=0; i<size; i++){
        let a:number[]=[];
        for(let j=0; j<size; j++){

            a.push(parseInt(prompt(`element[${i}][${j}]: `).trim()));
        }
        array.push(a);
    }
}

function addArrays(array1: number[][], array2: number[][]):number[][] {
    let result:number[][]=[];

    for(let i=0; i<array1.length; i++){
        let a:number[]=[];
        for (let j=0; j<array1[i].length; j++){

            a.push(array2[i][j]+array1[i][j]);
        }
        result.push(a);
    }
    return result;
}

let array1:number[][]=[];
let array2:number[][]=[];
let arraySize=parseInt(prompt('enter array size'));
console.log('Enter array1 elements')
writeToArray(array1,arraySize);
console.log('Enter array2 elements')
writeToArray(array2,arraySize);
console
    .log(addArrays(array1,array2))

