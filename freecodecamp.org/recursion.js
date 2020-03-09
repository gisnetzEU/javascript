//////////////////
//Basic JavaScript: Use Recursion to Create a Countdown
// countup [ 1, 2, 3, 4, 5 ]
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]


// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line
console.log(countdown(5)); // [5, 4, 3, 2, 1]

//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
   if  (endNum - startNum === 0){
     return [startNum];
   }
   else {
     var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
   }
};

/*
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}*/