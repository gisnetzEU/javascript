var students = [{
        name: "Student1",
        score: 22,
    },
    {
        name: "Student2",
        score: 65,
    },
    {
        name: "Student3",
        score: 23,
    },
    {
        name: "Student4",
        score: 88,
    },
    {
        name: "Student5",
        score: 37,
    }
]

/*
students.map(function (value, index, array) {
    console.log(value)
    //console.log(index)
    //console.log(array)
})
*/
/*students.forEach((value)=>console.log(value))*/

/*    
students.forEach(function (value) {
    console.log(value)
})
*/

/*
students.filter(function (student) {
    return student.score >= 50
})

*/

function showEverythinginSingleLine(myList){
    return myList.sort(function(a,b){
        return b.score - a.score
    }).filter(function(student){
        return student.score >=50
    }).map(function (value)
    {   return value.name +" "+ value.score;
    })
}

console.log(showEverythinginSingleLine(students));