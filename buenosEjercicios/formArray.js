function registerUser() {
    let newUser = {
        "email": emailInput.value,
        "password": passwordInput.value
    };
    userList.push(newUser)
    demoContent.innerHTML += userToString(newUser) + "<br/>\n";
}

function userToString(user) {
    return "{ email: '" + user.email + "', password: '" + user.password + "' }";
}

let addBtn = document.getElementById('myBtn');
let emailInput = document.getElementById('inputName');
let passwordInput = document.getElementById("inputPassword");
let demoContent = document.getElementById("demo");

let userList = [];

addBtn.addEventListener("click", registerUser);