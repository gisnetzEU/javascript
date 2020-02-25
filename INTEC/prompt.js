/*var UserInput = prompt('say hello');
document.writeln(UserInput);
console.log(UserInput);*/

//console.log(confirm("Ok is true, cancel is false"));
//alert("This is a message ");
/*
var user = confirm("Are you sure to delete those files");
console.log(user)
console.log(typeof(user));
var result = user == true ? "Ok, DELETED":"cancel, no changed my mind";
console.log(result);
*/

var name = prompt('Enter firstName');
var familyName = prompt('Enter firstName');
var age = prompt('Enter age');


var Student = {
    firstname: "",
    lastName: "",
    age: "",
    showStudent: function(){
        console.log(this.firstname+ " " +this.lastName+ this.age);
    }
}



Student.firstname = name;
Student.lastName = familyName;
Student.age = age;

//var showStudent = "firstname: " Student.firstname + "lastName: " Student.lastName + "age: " + Student.age;

Student.showStudent(); //return function
console.log(Student); //return Object
//console.log(showStudent);