import promptSync from 'prompt-sync'

const prompt=promptSync();

function getArray(array:number[]){
    let size:number=parseInt(prompt('enter size of the array'));
    console.log('Enter array elements')
    for(let i=0; i<size; i++){
        array.push(parseInt(prompt('')));
    }
}

function displayArray(array:number[]){
    console.log(array);
}

let array:number[]=[];
getArray(array);
displayArray(array);

