var result =document.getElementById('test'); //global variable
var Nietzsche = document.getElementById('nietzsche');
function getMessage(){
    var showTime = new Date();
    //var myString = new String();
   //alert('welcome\n' + showTime);
}

function whenMouseOvermyItem(){
    return result.innerHTML = "This is mouse over";

}

function onmouseoutEvent(){
    return result.innerHTML = "This is ountmouse mouse event";
}

//var img = document.getElementById("nietzsche");

function ChangePhoto(){
    return Nietzsche.src="https://www.filosofie.nl/upload/sleutelfiguren/nietzsche.jpg";
}


function getDefault(){
    result.innerText="default"
}
