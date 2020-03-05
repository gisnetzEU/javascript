var number = 3;
switch (number) {
    case 0:
        console.log('0');
    case 3:
        console.log('3');
    case 5:
        console.log('5 is correct');
        break;
    default:
        console.log('default')
}


var myDay = new Date();
console.log();
switch (myDay.getDay()) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        
}

var winner = "Jackie"
console.log();
switch (winner) {
    case "Michael":
        console.log('Winner: Michael');
        break;
    case "Jackie":
        console.log('Winner: Jackie');
        break;
    case "Jack":
        console.log('Winner: Jack');
        break;
    default:
        console.log('Winner: default');
           
}

var checkBoolean = false;

switch (Boolean(checkBoolean)) {
    case true:
        
        console.log('return true');
        break;
    case false:
        console.log('return false');
    
}

//console.log(9<5 ? 'true' : 'false');

var myBoolean = true;
function profile(){
    console.log('Show pofile // function callback')
}
switch  (myBoolean){
    case false:
        console.log('non')
    case true:
        profile();
        break;
}
