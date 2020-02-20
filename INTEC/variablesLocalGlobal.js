function Example(){
    var ThisIsLocalVariable = 1;
    console.log( ThisIsLocalVariable);
}
Example();

function Example1(){
    //var ThisIsLocalVariable = 1;
    //console.log( ThisIsLocalVariable);    
}
Example1();

var GlobalVariable =10 ;

function Example2(){
        console.log( GlobalVariable);    
}
Example2();

function Example3(){
    //var ThisIsLocalVariable = 1;
    console.log( GlobalVariable);    
}
Example3();


