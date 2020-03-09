//html
//myFigure
var player = document.getElementById('player');
var i=0;
//var times = 0;
function MoveFoward(){
    i += 5;
    //times+=5;
    if(i<500){
      //player.style.left='${i}px' ; //5 10 15 20 25
      player.style.left= i+'px';
    } else{
        i=0; 
        i+=5;
        //player.style.left = '${i}px';
        player.style.left = i+'px';
    }

    setTimeout(MoveFoward, 200);

}


MoveFoward();