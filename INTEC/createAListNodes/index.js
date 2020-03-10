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
//var myMessage
//myRow.textContent='test';
console.log(myContainer);




 var records =[
    {
        "name":"Giselle",
        "age":30
    },{
        "name":"Polle",
        "age":30
    }
];
var result = document.getElementById('result');

records.forEach((item, index)=>{
 result.innerHTML += `
 <li>${item.name}</li>
 `
}) 