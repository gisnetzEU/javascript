//Ul list element
var myUL = document.getElementById('myList');
var myButton = document.getElementById('add');
//var form = document.getElementById('form');
var task = document.getElementById('task');


myEventListeners();

function myEventListeners(){
    myButton.addEventListener('click', todoFunction);
}

function todoFunction(event){
    event.preventDefault();
    var input = document.createElement('input');
    var li = document.createElement('li');
    var btn = document.createElement('button');

    //name is child of addTodoButton
    var addTodoButton = document.createElement('button');
    var addTodoBtnName = document.createTextNode('Add My task to the list');
    addTodoButton.appendChild(addTodoBtnName);


    btn.appendChild(document.createTextNode('X'));
    input.type='text';
    li.append(input);
    li.appendChild(btn);

    li.appendChild(addTodoButton);

    myUL.appendChild(li);
 
    //add my task
    addTodoButton.addEventListener('click', function todo(event){
        

        var inputValue = input.value;
        task.innerHTML += `<li>${input.value}</li> `
        event.preventDefault();
        //console.log('test');
        //console.log(input.value);
    })
    btn.addEventListener('click', function x(event){
        event.preventDefault();
        myUL.removeChild(li);

    }
    )}


