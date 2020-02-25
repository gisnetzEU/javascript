var message = "These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.";
/*
var myConsole = message.length;
myConsole = message.indexOf('will');
myConsole4 = message.indexOf('know',10);//start in position 10
myConsole2 = message.lastIndexOf('will');
myConsole3 = message.search('will');
console.log(myConsole);
console.log(myConsole2);
console.log(myConsole3);
console.log(myConsole4);*/


var ShowInConsole;
//ShowInConsole = message.slice(10, 20); //show character in posiiton 10 to posiition 20
//ShowInConsole = message.slice(0, 10);
//ShowInConsole = message.slice(0, -1); //show all the character of the chain
//ShowInConsole = message.slice(9); //a partir de la posicion 9
//ShowInConsole = message.substring(10,25)
//ShowInConsole = message.substring(0,-1) //subString doesnt accept negatives numbers=> NULL

//ShowInConsole = message.substring(9,20) //start from index number and return 20 chars
//ShowInConsole = message.substring("functions", "pinky");
//ShowInConsole = message.replace(/knowledge/1,'foo');
//var a = '';

//ShowInConsole = message.replace('knowledge','pinky');
//ShowInConsole = message.replace(/[^*]/g,'foo');
//ShowInConsole = message.replace(/[^a-zA-Z0-9]/g,'foo');
//ShowInConsole = message.replace(/string/g,'01');

ShowInConsole = message.toUpperCase();
ShowInConsole = message.toLowerCase();

/*
message = "Firstname";
var myLastName = "    Lastname   ";
//ShowInConsole = message.concat(myLastName);
ShowInConsole = message.concat(myLastName.trim()); //removing spaces
console.log(ShowInConsole);
*/

message = "lorem ipsum";

//ShowInConsole = message.charAt(1);
//ShowInConsole = message.charCodeAt(1); //UTF-16
ShowInConsole = message[1]; //index number start from 0

message= "a,b,c,d,e,f";
console.log(typeof(message));
console.log(message);
ShowInConsole = message.split(","); //array
console.log(ShowInConsole);

