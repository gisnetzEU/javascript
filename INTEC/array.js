var books = ['book1','book2','book3','book4','book5'];
var currentArray = document.getElementById('myArray').innerText=books;


function myFunction(){
    
    var ShowInConsole = books.shift(); //remove first element
    currentArray = document.getElementById('myArray').innerText=books; //update curentarray variable and print new array into my same html elements
    var myResult = document.getElementById('result').innerText=ShowInConsole;
    //return myResult;

} 

