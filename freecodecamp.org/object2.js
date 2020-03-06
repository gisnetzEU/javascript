var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed); // "Doberman"
  
  var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
  console.log(someObj[someProp]); // "John"

/////////////////////////////

  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;  // Change this line
  var player = testObj[playerNumber];
  
  
 ////////////////////////////////////
 
 // Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder"


///////////////////////////////////

 Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.bark = "woof";

///////////////////////
//Delete Exercise
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

