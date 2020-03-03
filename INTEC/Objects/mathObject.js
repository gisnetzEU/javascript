//mathObject.js

console.log(Math.PI);

//Round()
console.log(Math.round(9.6));

//Power Method
console.log(Math.pow(8,2));
//Abs
console.log(Math.abs(-9,6));
//sin /cos
console.log(Math.sin(90 * Math.PI/180));
console.log(Math.cos(0 * Math.PI/180));

console.log(Math.min(8,5,9,4,2,6,8,2,0))


function GetRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

console.log(GetRandomNumber(1,100));

//Conditions Statements
let x = GetRandomNumber(3,6);
if(x== 5){
    console.log('found it!', x);
    
}else if(GetRandomNumber(3,6)== 3){
    console.log('found the second number');
}else {
    console.log('nothing, try again');
}
    