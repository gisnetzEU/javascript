/*function tellFortune(numChildren, partnerName, geoLocation, jobTitle){
    console.log("You will be a "+ jobTitle +" in " + geoLocation +", and married to "+  partnerName + " with " +numChildren +" kids.");

}

tellFortune(4, "Mary", "Brazil", "lawyer");
tellFortune(1, "Monica", "Barcelona", "doctor");
*/

/*
function calculateDogAge (age){
    console.log(age*7);
}

calculateDogAge (5);
*/ 

/*
function calculateSupply(age,amount){
    const maxAge = 100;
    var yearAmount= 365*amount;
    var lifeAmount = yearAmount*maxAge;
    console.log("you will need " +lifeAmount +" lifetime supply")
}

calculateSupply(37, 100)
*/

/*
function calcCircumference(r){
    var circunference= 2*r*Math.PI ;
    console.log("circunference= "+circunference);
}

function calcArea(r){
    var area = Math.PI*r*r;
    console.log("area= " +area );
}

calcCircumference(5);

calcArea(5);
*/

function celsiusToFahrenheit(c){
    var res = (c * 9/5) + 32;
    console.log(c + " 'C = "+res + "'F");

}

function fahrenheitToCelsius(f){
    var res = (f-32)*(5/9);
    console.log(f + " 'F = "+res + "'C");
}

celsiusToFahrenheit(26);

fahrenheitToCelsius(98.6);