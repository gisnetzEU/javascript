//div container parent of both
var myContainer = document.createElement('div');
myContainer.className = "container"
//row
var myRow = document.createElement('div');
myRow.className="row";

myRow.textContent="This is content";
//Col
var myCol = document.createElement('div');
myCol.className='col-sm-12';

var myMessage = document.createTextNode('This is TextNode');

/* console.log(myContainer);
console.log(myRow);
console.log(myCol);
 */


myRow.appendChild(myCol);
myContainer.appendChild(myRow)
myRow.appendChild(myMessage);

console.log(myContainer);

