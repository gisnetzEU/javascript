var books = ['book1','book2','book3','book4'];
var ShowInConsole;
ShowInConsole = books.toString();
ShowInConsole = books.join("=>"); // join all the  array elements in string


console.log("Before pop =>", books);
ShowInConsole = books.pop();
console.log("After pop =>",books);
//console.log(typeof(ShowInConsole), " > ",ShowInConsole);
//console.log("Before =>",typeof(ShowInConsole), " > ",ShowInConsole,"\nAfter =>", books);
//console.log("After =>", books)


console.log("Before push =>",books);
books.push("gfghfg");
books.push(10);
books.push(true);
console.log("After 3 push =>",books);