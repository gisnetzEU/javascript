//counter
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var myResult= document.getElementById('result');
var count = 0;

increment.addEventListener('click',Increment);
decrement.addEventListener('click',Decrement);

function Increment(){
    count++;
    console.log(count);
    myResult.innerText=count;
    console.log("this is increment");
}

function Decrement(){
    
    if(count<=0){
        //alert('Negative numbers are not allowed')
        myResult.innerText="0";
    }else{
        count--;
        //console.log(count);
        myResult.innerText=count;
        //console.log("this is decrement");
    }
    
    
}
