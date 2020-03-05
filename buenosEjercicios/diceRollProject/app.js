//html elements
var diceRollButton = document.getElementById('diceRollerButton')
var placeholder1 = document.getElementById('placeholder1');
var placeholder2 = document.getElementById('placeholder2');
var demoContent = document.getElementById("demo")

diceRollButton.addEventListener('click', diceRollerFunction);

function diceRollerFunction(){
    var diceRollSides=6;
    let diceRollMatchs = [];

    
    var randomNumber1 = Math.floor(Math.random() * diceRollSides) + 1;
    var randomNumber2 = Math.floor(Math.random() * diceRollSides) + 1;
    document.images["mydice1"].src="d"+randomNumber1+".gif";
    document.images["mydice2"].src="d"+randomNumber2+".gif";
    demoContent.innerHTML +="Rolling!<br/>";
    if (randomNumber1 == randomNumber2){
        //console.log("number of match",randomNumber1," ", randomNumber2 )
        diceRollMatchs.push(randomNumber1);
        diceRollMatchs.push(randomNumber2);
        demoContent.innerHTML +="<p class='text-danger'> Match!<br/>";
    }
    placeholder1.innerText=randomNumber1;
    placeholder2.innerText=randomNumber2;
    
    console.log(randomNumber1, " " , randomNumber2);
    console.log(diceRollMatchs);
    console.log('testing');
}