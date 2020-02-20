function muFunc(){
    console.log("this is my first function");
    //return "this is a function"
}

//myFunc();

function doSomeCalc(a,b) {
    var total = a+b;
    //return total;
    console.log(total);
}

doSomeCalc(5,6)

function findBiggestNumber(x,y) {
    return x >= y  ? 'x is greater than y':'x is less than y';
}

console.log(findBiggestNumber(50,90));

function calcAverage(a, b, c, d){
    var average = (a+b+c+d)/4;
    return average >=90 ? "good student": "the student could be better";
}

console.log(calcAverage(100,50,90,70));

function findBiggestNumber(x,y) {
    return x <= y  ? x + ' is the minimal':y +' is the minimal';
}

console.log(findBiggestNumber(50,10));