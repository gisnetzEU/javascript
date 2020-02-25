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
/*
var name = prompt('Enter firstName');
var country = prompt('Enter country');
var webLanguage = prompt('Enter web language');
var age = prompt('Enter age');
*/

var webDevelopers = [{
    firstname: "Giselle",
    country: "Mexico",
    webDeveloper: "JS",
    age: 37,    
},  {
    firstname: "Narine",
    country: "Armenia",
    webDeveloper: "JS",
    age: 38,    
},
{
    firstname: "Hilda",
    country: "Belgium",
    webDeveloper: "JS",
    age: 35,    
},

];


for (i = 0; i < webDevelopers.length; i++) {
    var webDeveloper = webDevelopers[i];
    console.log(webDeveloper.firstname + ' is ' + webDeveloper.age + ' years old.');
  }

webDevelopers.forEach(element => {
    console.log("This web developer is " + element.age + " years old whose name is " + element.firstname );
});
/*
  function describeCat(cat) {
    console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
  }
*/
console.log(webDevelopers); //return Object
