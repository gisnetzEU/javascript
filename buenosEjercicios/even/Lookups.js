//////////////////
//Basic JavaScript: Using Objects for Lookups/


// Setup
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  // Only change code below this line
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


/////////////////////////////
//Basic JavaScript: Testing Objects for Properties

//Example
var myObj = {
  top: "hat",
  bottom: "pants"
};
console.log(myObj.hasOwnProperty("top"));    // true
myObj.hasOwnProperty("middle"); // false

/////////////
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
 //  and change the value of `return` in `else` statement:
 
    return "Not Found"
  }
}

checkObj("gift");

//Answer = pony

//////////////////////////
//Basic JavaScript: Manipulating Complex Objects
//Add a new album to the myMusic array 
//It will be a new Object
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add a record here
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];


///////////////////////////
//Basic JavaScript: Accessing Nested Objects
//Example

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"


// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

///////////////////////////////////
//Basic JavaScript: Accessing Nested Arrays
//Example
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
//Answer = Pine

/////////////////////////////////
//Basic JavaScript: Record Collection


// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
	
 if(prop !== 'tracks' && value !== "") {
    collection[id][prop] = value;
  }
  
  if(prop === 'tracks' && collection[id][prop] === undefined) {
    collection[id][prop] = [];
  }
  
  if(prop === 'tracks') {
    let track = collection[id][prop];
    track.push(value)
  }
  
  if(value === "") {
    delete collection[id][prop]
  }
  
  console.log(collection)
  return collection;
}
	
//if(prop == "tracks" && !collection[id].hasOwnProperty("tracks")){collection[id].tracks = []; collection[id].tracks.push(value);}
 // if(prop !== "tracks" && value !== ""){ collection[id][prop] = value; }
 // if(prop == "tracks" && value !== ""){collection[id].tracks.push(value);}
 // if(value === ""){delete collection[id][prop];}
//////////////////////
/*
function updateRecords(id, prop, value) {
 if (value === '') {
    delete collection[id][prop];
  } else {
    if (prop !== 'tracks') {
      collection[id][prop] = value;
    } else {
      collection[id].hasOwnProperty('tracks') ? collection[id].tracks.push(value) : collection[id].tracks = [value];
    }
  }

  return collection;
}*/

updateRecords(5439, "artist", "ABBA");

