import promptSync from "prompt-sync"

const prompt=promptSync();

let mark:string
    =prompt("Enter your mark");

console
    .log(getResult(parseInt(mark)));
function getResult(mark:number):string{

    if(mark>=50&&mark<=100)
        return "Passed";
    else if(mark>=0&&mark<=49)
        return "Failed";
    else
        return "Enter valid mark";
}