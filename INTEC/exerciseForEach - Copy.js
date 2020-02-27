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

function myFunct(){
    students.sort(function(a,b){return a.score-b.score});
    }


myFunct();

//mynewNumbers.sort(function(a,b){return a-b})


function getStudentName(student){
  var result  =student.score<=70
}