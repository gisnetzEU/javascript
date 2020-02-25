/* var x = "Global Variable";

function myFunction1(){
    var x = "Local Variable";
    console.log(x);
}

function myFunction2(){
     x= "Global Variable has been Updated";
    console.log(x);
}

myFunction1();
myFunction2(); */
var age;
//function with one parameter
function greeting(name, Age){
    age = Age;
    console.log("Hello "+name+", Welcome to My Page")
    console.log("Your age is "+age)
}

greeting('Giselle', 20);

