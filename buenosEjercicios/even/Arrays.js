//////////////////
//append data to the end of an array is via the push() function.

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

//myArray should now equal [["John", 23], ["cat", 2], ["dog", 3]].

////////////////////////////////
//.pop() removes the last element from an array and returns that element.

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;
removedFromMyArray = myArray.pop();

/////////////////////////////////

//Basic JavaScript: Manipulate Arrays With shift()Passed
//.shift() function to remove the first item from myArray


// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
removedFromMyArray = myArray.shift();

////////////////////////////////////////////////////////////
//.unshift() adds the element at the beginning of the array.

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);

//myArray should now have [["Paul", 35], ["dog", 3]].

///////////////////
//Basic JavaScript: Shopping ListPassed



var myList = [["Chocolate Bar", 15],
	["Chocolate Bar", 15],
	["Chocolate Bar", 15],
	["Chocolate Bar", 15],
	["Chocolate Bar", 15]
];
