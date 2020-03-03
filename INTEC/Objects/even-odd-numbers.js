
var inputNumber = document.getElementById('inputNumber');
var addBtnOdd = document.getElementById('myBtnOdd');
var addBtnEven = document.getElementById('myBtnEven');
var demoContent = document.getElementById("demo")

addBtnOdd.addEventListener("click", isOdd);
addBtnEven.addEventListener("click", isEven);

function isOdd(){
  if(Number(inputNumber.value)%2 === 0){
    //return false
    //console.log("false");
    return demoContent.innerHTML +="Number: " + inputNumber.value + " is even, not Odd <br/>\n";
  }else {
    //return true
    console.log("true");
    return demoContent.innerHTML +="Number: " + inputNumber.value + " is Odd <br/>\n";
  }
}

function isEven(){
  if(Number(inputNumber.value)%2 === 0){
    //return true
    console.log("true");
    return demoContent.innerHTML +="Number: " + inputNumber.value + " is even <br/>\n";
  }else {
    //return false
    console.log("false");
    return demoContent.innerHTML +="Number: " + inputNumber.value + " is Odd, not even <br/>\n";
  }
}
