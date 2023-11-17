import promptSync from 'prompt-sync'

const prompt=promptSync();

let array:number[]=[];

function writeToArray(a:number[],limit:number){
    for(let i=0; i<limit; i++){
        a.push(parseInt(prompt('')));
    }
}
function readArray(array: number[]) {
    console.log(array)
}
function sortArrayDescending(array: number[]) {
    let minIndex=0;

    for(let i=0; i<array.length; i++){
        minIndex=i;
        for(let j=i+1; j<array.length; j++){
            if(array[minIndex]<array[j]){
                minIndex=j;
            }
        }
        let temp=array[i];
        array[i]=array[minIndex];
        array[minIndex]=temp;
    }
}


let arraySize
    =parseInt(prompt('Enter the size of array'));

console
    .log(`enter the ${arraySize}  elements of the array`);

writeToArray(array,arraySize);
sortArrayDescending(array);
readArray(array);






