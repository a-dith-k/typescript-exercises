import promptSync from 'prompt-sync'

const prompt=promptSync();
let array1:number[]=[];
let array2:number[]=[];

let limit:number =parseInt(prompt('Enter size of Array'));

console.log(`Enter ${limit} elements of first array`);
writeArrayElements(array1);

console.log(`Enter ${limit} elements of second array`);
writeArrayElements(array2);

swapArray(array1,array2);

console.log("Elements of Array 1 are")
readArrayElements(array1)

console.log("Elements of Array 2 are")
readArrayElements(array2)

function readArrayElements(array: number[]) {
    console.log(array)
}
function swapArray(array1:number[], array2:number[]){
     for(let i=0; i<limit; i++){
          let temp=array1[i];
          array1[i]=array2[i];
          array2[i]=temp;
     }
}
function writeArrayElements(array:number[]){
    for(let i=1; i<=limit; i++){
       array.push(parseInt(prompt('')));
    }
}

