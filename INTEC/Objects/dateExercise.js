//realtime.js
window.setInterval(getMyTime,1000); //1000ms = 1s, 10000=10s

var mytime = document.getElementById("time");
var myBtn = document.getElementById("myBtn");

myBtn.addEventListener('click', getMyTime);

function getMyTime(){
    var date = new Date();
    setTime(getMyTime,300);
    mytime.innerHTML = date.toLocaleString();

    //console.log(date.toLocaleString)
    
}
