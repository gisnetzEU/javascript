/*function DrEvil(amount){
    if (amount == 1000000)
    console.log('Great');
    else console.log('Save money');
}

DrEvil(1000000);
DrEvil(300); */

/*
function mixUp(a,b){
    console.log(b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2));
}
mixUp('mix', 'pod') //'pox mid'
*/

/*
function fixStart(chain){
    //var firstletter = chain[0];
    var c = chain.charAt(0);
    console.log(c + chain.slice(1).replace(new RegExp(c, 'g'), '*'));
    //var n = chain.replace(firstletter, "*");
    //console.log(n);
}
fixStart('babble'); // 'ba**le'
*/

/*
function verbing(str){
    var strnlength = str.length;
    if (strnlength <3){
       console.log(str);
    }
    else if  ((str[strnlength-1] == 'g') && (str[strnlength-2] == 'n') &&(str[strnlength-3] == 'i')){
        str = str + "ly";
        console.log(str);
    }
    else console.log(str + "ing");
}

verbing('swim')//: 'swimming'
verbing('swimming')//: 'swimmingly'
verbing('go')//: 'go'
*/

/*function verbing(word) {
  if (word.length < 3) return word;
  if (word.slice(-3) == 'ing') {
    return word + 'ly';
  } else {
    return word + 'ing';
  }
}
*/


function notBad (str){
    var n = str.indexOf("not");
    var b = str.indexOf("bad");
    //if (n == -1)
    //
    //if (b == -1)
    console.log(n);
    console.log(b);
    if (n == -1 || b == -1 || b < n)
     return console.log(str);
  return console.log(str.slice(0, n) + 'good' + str.slice(b + 3));

}

notBad('This dinner is not that bad!');// 'This dinner is good!'
notBad('This movie is not so bad!');//'This movie is good!'
notBad('This dinner is bad!');// 'This dinner is bad!'
notBad('This dinner was bad not good!');
