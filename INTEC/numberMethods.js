var myNumber = "10";
var myFloatNumber = "10.5 fsfdsf"; //take the number part 5always the first part
var Money = 45.39999;
var ShowInConsole;
//var ShowInConsole = Number(myNumber);
//ShowInConsole = +myNumber;
ShowInConsole = parseInt(myNumber);
ShowInConsole = parseFloat(myFloatNumber);
ShowInConsole = Number.isFinite(123);
ShowInConsole = Number.isFinite(0);
ShowInConsole = Number.isFinite(-1);
ShowInConsole = Number.isFinite('123');
//ShowInConsole = Number.isFinite(5454545645654);
ShowInConsole = Number.isInteger(545.45);
ShowInConsole = Number.isInteger(545);
ShowInConsole = Money.toFixed(2);
console.log(typeof(ShowInConsole),">", ShowInConsole);

/*var user = 29.99999;
var myIntChecker = Number.isInteger(user);
var result = myIntChecker == true? 'Integer': 'Nan';
console.log(result);
*/
var user = 29.99999;
var myIntChecker = user.toFixed(2);
console.log(myIntChecker);

function fixedTheSalary(Salary){ //round up
    return "Salary > " + Salary.toFixed(2)
}
console.log(fixedTheSalary(user));