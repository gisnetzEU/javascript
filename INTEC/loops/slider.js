
//http://wallpaperheart.com/nature-background-images/
let images=[
    
    'http://wallpaperheart.com/wp-content/uploads/2018/04/water-nature-background-images.jpg',
    'http://wallpaperheart.com/wp-content/uploads/2018/04/railway-track-landscape-wallpaper-nature-background-images.jpg',
    'http://wallpaperheart.com/wp-content/uploads/2018/04/Photoshop-Background-Natures-nature-background-images.jpg'
]

var i=0;
var timer = 100;


function ChangeImage(){
    var random = Math.floor(Math.random()*3);
    
    document.getElementById('slider').style.background =`url('${images[random]}')`
    i++;
    if(i<timer){
        setTimeout(ChangeImage, 1000);
    }

}

ChangeImage();