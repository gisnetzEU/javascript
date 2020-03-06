//for in => through the properties of an oject
//for number of times
//for of 

var people = {
    name: "jack",
    age: 29

}

var myKey;
/* for (myKey in people) {
    console.log(people[myKey])
} */

var students = [{
        name: 'Jackie',
        age: 30
    },
    {
        name: 'Jack',
        age: 29
    }
]

console.log("for in");

/* for(myKey in students){
    console.log(students[myKey]);
    console.log(students[myKey].age);
    console.log(students[myKey].name);
} */

console.log("for of");

/* for(myKey of students){
    console.log(myKey)
    console.log(myKey.age)
    console.log(myKey.name)
} */

//console.log(myKey)

console.log(students.length)
var i = 0; //NaN


/* while (i < students.length) {
    //students.length =>2
    console.log(students[i]);
    console.log(students[i].name);
    console.log(students[i].age);
    i++;
} */

//var x = 0;
while (i < 100) {
    i++;
    if (i % 2 == 0) {
        console.log(i);
    }
}