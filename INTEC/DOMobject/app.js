var message = "Hello DOM";
var myApp = document.getElementById('app');

console.log(myApp.firstChild.innerText='test');
//myApp.innerHTML = message;


var h1 = document.getElementById('test');

h1.style.left = "100px";
var link = document.getElementById('link');

link.setAttribute('href', 'https://www.google.com/')

h1.setAttribute('class','btn btn-success');

console.log(myApp.classList);
console.log(myApp.classList.length);


for(var i=0; i<myApp.classList.length; i++){
    console.log(myApp.classList[i]);
}

console.log(h1.nodeName); // result H1
console.log(myApp.nodeName); // result DIV

var FindElement = document.getElementsByTagName('h1');
console.log(FindElement);

//FindElement[0].outerHTML="<p>hello</p>"

var FindMyElementByClassName = document.getElementsByClassName('test');
console.log(FindMyElementByClassName);
//create Element
var newParagraph = document.createElement('p');
newParagraph.textContent = "Lorem kgjfgkfkg";

myApp.append(newParagraph);

//Remove Child
var myList = document.getElementById('myList'); //get access
var btn = document.getElementById('btn');

btn.addEventListener('click', removeFunction);

function removeFunction(){
    //myList.removeChild(myList.childNodes[0]);
    //myList.removeChild(myList.childNodes[myList.childNodes.length-1]);
    //myList.removeChild(myList.firstElementChild);
    myList.removeChild(myList.lastElementChild);
    event.preventDefault();

    //var test =document.querySelector('#myList li:nth-child(2)')
    // test.remove();
}