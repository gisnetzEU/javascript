// html elements
var secondCardBody = document.querySelectorAll('.card-body')[1];
var firstCardBody = document.querySelectorAll('.card-body')[0];
var alertDiv;
const todoListUI = document.querySelector('.list-group');
const addButton = document.querySelector('#add');
const todoInput = document.querySelector('#todo');
const deleteAllTodosButton = document.querySelector('#clear-todos');
const filterTodosInput = document.querySelector('#filter');


// console.log('alertDiv', alert);
// EVent Listeners
EventListeners();

function EventListeners() { // our event listener
    addButton.addEventListener('click', doIt);
    deleteAllTodosButton.addEventListener('click', deleteAllTodos);
    filterTodosInput.addEventListener('input', filterTodos);
}

// functions 
function createElement(tagname) { // html tag generator
    return document.createElement(tagname);
}

function doIt(event) { // callback function
    const newTodoUIElem = createTodoUIElem(todoInput.value);
    todoListUI.appendChild(newTodoUIElem);

    const alert = alertMessage('success', 'this is a success message'); // generate alert div element
    // console.log('alertDiv', alert);
    secondCardBody.appendChild(alert); // inserting alert msg element into our secondBody
    setTimeout(function x() { // after 3 seconds alert message element will be deleted.
        alert.remove();
    }, 3000);

    event.preventDefault(); // avoid default config
}

function createTodoUIElem(todoTxt) {
    let todoUIElem = createElement('li');
    todoUIElem.className = 'list-group-item d-flex justify-content-between'

    const todoTxtUI = document.createTextNode(todoTxt);
    todoUIElem.appendChild(todoTxtUI);

    const removeLink = createRemoveLink(todoUIElem);
    todoUIElem.appendChild(removeLink);
    
    return todoUIElem;
}

function alertMessage(type, message) { // html alert message generator
    // alert message
    alertDiv = createElement('div');
    alertDiv.className = `alert alert-${type}`
    alertDiv.role = "alert";

    // 1st way of insert text into your div
    // alertDiv.innerHTML = "This is a danger alert—check it out!";

    // 2nd way of insert text into your div
    var alertMsg = document.createTextNode(message);
    alertDiv.appendChild(alertMsg);
    
    /*    <div class="alert alert-danger" role="alert">
    type => danger | success
    message => Text String
    This is a danger alert—check it out!
    </div>   */
    
    return alertDiv;
}

function createRemoveLink(elemToRemove) {
    let removeLink = createElement('a');
    removeLink.href = '#';
    removeLink.className = 'delete-item';

    let removeLinkIcon = createElement('i');
    removeLinkIcon.className = 'fa fa-remove';
    removeLink.appendChild(removeLinkIcon);

    removeLink.addEventListener('click', (event) => {
        elemToRemove.remove();
        event.preventDefault(); // avoid default config
    });

    return removeLink;
}

function deleteAllTodos() {
    // const todoUIElems = document.querySelectorAll('.list-group-item');
    // todoUIElems.forEach(e => e.remove());
    document.querySelectorAll('li.list-group-item')
        .forEach(e => e.remove());

    event.preventDefault(); // avoid default config
}


function filterTodos(){
    const filterTxt = filterTodosInput.value;
    const todoElems = document.querySelectorAll('li.list-group-item');
    if (!filterTxt) {
        todoElems.forEach(e => e.className = 'list-group-item d-flex justify-content-between'); // make visible all TODOs
        return;
    }

    todoElems.forEach(todoElement => {
        const todoTxt = todoElement.firstChild.textContent;
        const todoMatchesFilter = todoTxt.indexOf(filterTxt) >= 0;

        todoElement.className = (todoMatchesFilter)
            ? 'list-group-item d-flex justify-content-between'
            : 'list-group-item d-none justify-content-between';
    });
}