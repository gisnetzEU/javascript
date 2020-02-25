//Calculator

function squareNumber(number){
var squaredNumber = number*number;  
  console.log('The result of squaring the number', number,"is", squaredNumber);
  return squaredNumber;
}
squareNumber(9);

//halfNumber 
function halfNumber (number){
    var half = number / 2;
    console.log('Half of', number,"is", half);
    return half;
}
halfNumber(4);
  
  
//percentOf
function percentOf(num, p){
  var percent = (p*100) / num;
  console.log(p,"is",percent+"% of",num);
  return percent;
}
percentOf(20, 10) //


function areaOfCircle(r){
    //let area = Math.PI*r*r;
    let area = Math.PI*squareNumber(r);
    console.log("The area for a circle with radius", r,"is", area);
    //console.log(area.toFixed(2))
    return area;
}
areaOfCircle(3) 

function doCrazyStuff(num) {
    var half    = halfNumber(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    //var result  = percentOf(squared, area);
}

doCrazyStuff(5);