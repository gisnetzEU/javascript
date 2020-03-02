var myButton = document.getElementById('myBtn');
var inputName = document.getElementById('inputName');
var inputPassword = document.getElementById("inputPassword");

var p1 = 5;
var p2 = 7;

let userList = [];

function UserRegister() {
    let temp = []
    temp.push({
        "email": inputName.value,
        "password": inputPassword.value
    })

    userList.push(temp)
    console.log(userList)
}

myButton.addEventListener("click", UserRegister);

userList.forEach((user) => {
    console.log(user);
    document.getElementById("demo").innerHTML = user;
})

document.getElementById("myBtn").addEventListener("click", function () {
    myFunction(inputName);
});

function myFunction(a) {
    document.getElementById("demo").innerHTML = inputName;
}
console.log(userList);
//var x = document.getElementById(userList).innerText;