
var inputNumber = document.getElementById('inputNumber');
var addBtn = document.getElementById('myBtn');
var demoContent = document.getElementById("demo")


addBtn.addEventListener("click", oddEvenChecker);

function oddEvenChecker(){
  if(Number(inputNumber.value)%2 === 0){
    return demoContent.innerHTML +="Number: " + inputNumber.value + " is even <br/>\n";
  }else {
    console.log("true");
    return demoContent.innerHTML +="Number: " + inputNumber.value + " is Odd <br/>\n";
  }
}

