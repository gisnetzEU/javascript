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

students.forEach(mySort);

function myFunction(value, index, array){
    console.log("Index=> ",index);
    console.log("Value=> ",value.score);
}

function pass(value, index, array){
	if (value.score > 70){
	console.log("Index=> ",index);
	console.log("Value=> ",value.score);
	console.log("Name=> ",value.name);
	}
}

function mySort() {
	students.sort(function(a, b){return a.score - b.score});
	
  }


