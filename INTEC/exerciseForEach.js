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

function pass(student){
    return student.score > 50
}

function getStudentName(student){
  var result  =student.score<=70 ? student.name + ' '+ student.score +'#fail' : student.name+' ' + student.score + '#good'
  return result;
}


function mySortAlgo(a,b){
	return b.score - a.score
	/*  22 - 65 = -43 */
}

function whoPassed(myList){
  return myList.filter(pass).sort(mySortAlgo).map(getStudentName)
}

console.log(whoPassed(students));
//console.log(StudentsSortedByScore(students))