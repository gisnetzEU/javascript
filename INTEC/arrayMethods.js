/*var books = ['book1','book2','book3','book4'];
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

ShowInConsole = books.shift(); //delete the first element
console.log(ShowInConsole, "\nNewArray =>", books)

ShowInConsole = books.unshift("Nexbook1"); //adding elements at beginin
console.log(ShowInConsole, "\nNewArray =>", books)


//splice

var myNumbers = [1,2,3,4,5,6,7,8,9,10]
var secondArray = [11,12,13,14];
console.log(myNumbers)
myNumbers.splice(6,4);



var result = myNumbers.concat(secondArray);
console.log(result);

*/

var data = "          dfgdgfdg";
var data1 = "gfgfgdgfd";

var result = data.concat(data1)
console.log(result);
//var RemoveSpacing = MergeIt.trim();

var myNewArray = ['Jack', 'Merlin', 'Ana', 'Stien', 'Tim', 'Paul'];

console.log(myNewArray.sort());

//Reverse methods

console.log(myNewArray.reverse());

var mynewNumbers=[55,88,9,6,558,635,93];

console.log(mynewNumbers);
console.log(mynewNumbers.sort()); //method for strings


//mynewNumbers.sort(function(a,b){return a-b})//compares the numbers and sort them in ascendent way
//console.log(mynewNumbers);

//mynewNumbers.sort(function(a,b){return b-a})//compares 2 numbers and sort them in descendent way
//console.log(mynewNumbers);

mynewNumbers.forEach(myFunction);

function myFunction(value, index, array){
    console.log("Index=> ",index);
    console.log("Value=> ",value);
}

console.log(mynewNumbers.sort()); //method for strings