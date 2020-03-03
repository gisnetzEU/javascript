//realtime.js
window.setInterval(getMyTime,1000); //1000ms = 1s, 10000=10s
function getMyTime(){
    var date = new Date();
    document.getElementById('time').innerHTML = date.toLocaleString();//10:33:11
    
}

getMyTime();