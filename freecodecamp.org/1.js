var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    console.log( myObj[checkProp]);
  }
  else {
 //  and change the value of `return` in `else` statement:
 
 console.log( "Not Found");
  }
}

checkObj("gift");