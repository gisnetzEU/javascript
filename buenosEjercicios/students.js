var students = [
{
	name:"Student1",
	score:22,
},
{
	name:"Student2",
	score:65,
},
{
	name:"Student3",
	score:23,
},
{
	name:"Student4",
	score:88,
},
{
	name:"Student5",
	score:37,
}
]

students.forEach(myFunction);

function myFunction(value, index, array){
    console.log("Index=> ",index);
    console.log("Value=> ",value.score);
}
/*
function pass(value, index, array){
	if (value.score > 70){
	console.log("Index=> ",index);
	console.log("Value=> ",value.score);
	console.log("Name=> ",value.name);
	}
}*/

/*
function mySortAlgo(a,b){
	return a.score - b.score
	
}*/

//function whoPassed(element, index, typedarray){
function whoPassed(element){
    return element.score > 50
}



function mySort(myList){
  return myList.sort(function(a,b){return a.score - b.score} )
}

/*
function giveName(student){
  return student.name;
}*/

let giveName = function(student){
    return student.name;
}

//let myFunction = giveName
let passedStudents = students.filter(whoPassed);
let sortedStudents = mySort(passedStudents);

// Usando una función definida anteriormente:
// let studentNames = sortedStudents.map(giveName);

// Usando una función definida "in situ":
// let studentNames = sortedStudents.map(function (elem) {
//     return elem.name;
// });

// Usando una lambda "in situ":
// let studentNames = sortedStudents.map( (elem) => { return elem.name; } );
// Usando una lambda "in situ", abreviado:
let studentNames = sortedStudents.map(elem => elem.name);

//console.dir(passedStudents);
console.log(studentNames);