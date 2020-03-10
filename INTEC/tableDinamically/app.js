//div container parent of both
var myContainer = document.createElement('div');
myContainer.className = "container"
//myCard
var myTable = document.createElement('table');
myTable.id="myTable";
myTable.style="width: 30%;";

var myTR1 = document.createElement('tr');
var myTR2 = document.createElement('tr');
var myTR3 = document.createElement('tr');


var myth1 = document.createElement('th');
var myth2 = document.createElement('th');
var myth3 = document.createElement('th');

myth1.textContent="First name";
myth2.textContent="Last name";
myth3.textContent="Age";

//myTable.appendChild(myImg);
myContainer.appendChild(myTable);
myTable.appendChild(myTR1);
myTR1.appendChild(myth1);
myTR1.appendChild(myth2);
myTR1.appendChild(myth3);

var mytd1 = document.createElement('td');
var mytd2 = document.createElement('td');
var mytd3 = document.createElement('td');

mytd1.textContent="Jill";
mytd2.textContent="Smith";
mytd3.textContent="50";

myTable.appendChild(myTR2);
myTR2.appendChild(mytd1);
myTR2.appendChild(mytd2);
myTR2.appendChild(mytd3);

var mytd4 = document.createElement('td');
var mytd5 = document.createElement('td');
var mytd6 = document.createElement('td');

mytd4.textContent="Giselle";
mytd5.textContent="Montero";
mytd6.textContent="35";

myTable.appendChild(myTR3);
myTR3.appendChild(mytd4);
myTR3.appendChild(mytd5);
myTR3.appendChild(mytd6);

console.log(myContainer);

document.body.appendChild(myContainer);