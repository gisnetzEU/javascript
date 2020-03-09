function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
  let  i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();
///////////////////////////////////////
//const MAYUS
//for = > let

function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
