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

function whoPassed(element, index, typedarray){
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
let studentNames = sortedStudents.map(giveName);


//console.dir(passedStudents);
console.log(studentNames);