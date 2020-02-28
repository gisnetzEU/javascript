var books = [
    {
    'title': 'The Lord of the Rings',
    'author': 'J.R.R. Tolkien',
    'alreadyRead': true,
    },
    {
        'title': 'The Most Human Human',
        'author': 'Brian Christian',
        'alreadyRead': false,
    },
    {
        'title': 'The Design of EveryDay Things',
        'author': 'Don Norman',
        'alreadyRead': false,
    }
];

books.forEach(myF);

function myF(value, index, array){
    //console.log("Value=> ",value.alreadyRead);
    
    if(value.alreadyRead == false){
        console.log("You still need to read",value.title,"by",value.author);
        
    }
    else
    console.log("You already read",value.title,"by",value.author);
}