var books = ['book1','book2','book3','book4','book5'];
var oldArray = document.getElementById('result').innerText=books;


function myFunction(){
    
    var ShowInConsole = books.shift();
    var newArray = document.getElementById('newArray').innerText=books;
    var myResult = document.getElementById('result').innerText=ShowInConsole;
    return myResult;

}

