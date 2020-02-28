//Dataflow
//flow1
var dataflow = true;

function keeper1(a){
    return a;
}

function keeper2(a){
    return a;
}

function keeper3(a){
    return a;
}

var result = keeper3(keeper2(keeper1(dataflow)));

console.log(result);

