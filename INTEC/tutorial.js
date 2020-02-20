console.log('test');

/*var, const, let */

var x;

x = 1;
console.log(x);

const y = "this is const"

console.log(y)

let z;
/*

let = can be updated but not re - declared
const = cannot be updated or re - declared
var = can be re - declared and updated
*/
var myMessage = 'Hi, this is default value';
var howMany = 4;

if (howMany) {
    myMessage = "myMessage variable has been updated";
}

myMessage = "myMessage variable has been updated";
console.log(myMessage);

var firstnumber;
var secondnumber;
firstnumber = 10;
secondnumber = 20;

var total = firstnumber +  secondnumber;
console.log("total=>",total);

var a,b,c;
a =1;
b= 2;
c= a+b;
console.log(c);


var userInput = "5";
var converteduserInput = Number(userInput);
console.log(converteduserInput);

if (typeof userInput == "string"){
    console.log("User enter a number as String");
    console.log(converteduserInput)
    var converteduserInput = Number(userInput);

}else
    console.log("Ok, is an integer");