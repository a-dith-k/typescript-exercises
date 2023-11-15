import promptSync from 'prompt-sync'

const prompt=promptSync();

let totalMark =prompt("Enter your total mark");
console.log(getGrade(parseInt(totalMark)));
function getGrade(mark:number):string {

    if (mark > 90 && mark <= 100)
        return "A";
    else if (mark < 90 && mark >= 80)
        return "B";
    else if (mark < 80 && mark >= 70)
        return "C";
    else if (mark < 70 && mark >= 60)
        return "D";
    else if (mark < 60 && mark >= 50)
        return "E";
    else if (mark < 50 && mark >= 0)
        return "Failed"
    else
        return "Invalid mark";
}