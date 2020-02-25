var x = 'firstName' + 'lastName';
var y = "firstName" + "lastName";

console.log(x);
console.log(y);

var number1 = 1+1;
console.log(number1);

var ON = true;
var OFF = false;

console.log(ON, " ", OFF)
console.log(typeof(ON));

//Hex, Bin, Octal Numbers

var thisIsVar = 123;  //declared
thisIsVar = 321; //Update

var thisIsVar= 'String';

let one = 123;

one = 321; 
//let one= 'hola'; //It couldnt redeclared

console.log(one);

const thiIsConst = 999;

//thiIsConst = 789; //it can be redeclared
//let one= 'bye';

let s1 = '1+1';
let s2 = new String('1+1');
console.log(eval(s1));
console.log(eval(s2));

console.log(s1 == s2);

var bigNumber = 10;
var smallNumber = 5;
var showInConsole = bigNumber > smallNumber;

showInConsole = bigNumber <= smallNumber;
showInConsole = bigNumber >= smallNumber;

showInConsole = (bigNumber != smallNumber) && (bigNumber <= smallNumber);
showInConsole = (bigNumber != smallNumber) || (bigNumber <= smallNumber);

showInConsole = bigNumber != smallNumber ? 'true' : 'false';

console.log(showInConsole);

//bigNumber != smallNumber

console.log(typeof(false));
console.log(typeof([1,2,3,4]))
console.log(typeof(function(){}))

var Student ={
    studentName: "Max",
    studentAge: 23
};
console.log(Student);

var test = 'Name' + 5;

console.log(test);

var MyNumber = '5';

console.log(typeof(Number(MyNumber)));

const myValue = 1 +"";

console.log(typeof(myValue));

let thisIsInteger = "15";
thisIsInteger = +thisIsInteger;
console.log(typeof(thisIsInteger)); //convertir de string a integer

console.log(+true); //it returns 1 >IT CONVERTS THE BOOLEAN TO NUMBER
console.log(+false);

console.log(typeof(+true));

let Inc = 1;
let Dec = 10;

Inc++;
Dec--;


console.log(Inc++);

console.log(Dec--);


function myFunction(a,b){
    return a+b;
}

//console.log(myFunction(1,1))

/*
function myFunction(){
    return 1+1;
}

console.log(myFunction())*/

var ThisIsFunction = myFunction(2,3)
console.log(ThisIsFunction);

var yourAge= 29;
function showAge(yourAge){
     //this is a local variable
    return yourAge;
}
 
var ShowOnSite = showAge(29);

console.log("I am "+ ShowOnSite + " years old.");
console.log("I am "+ yourAge + " years old.");