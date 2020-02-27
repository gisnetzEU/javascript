//Arrays of Objects

var myCats = [
    {name: "Lizzie",
     age: 18},
    {name: "Andrea",
     age: 1}
  ];
  
  for (var i = 0; i < myCats.length; i++) {
    var myCat = myCats[i];
    console.log(myCat.name + ' is ' + myCat.age + ' years old.');
  }

  //Objects as Arguments
  var lizzieTheCat = {
    age: 18,
    furColor: "grey",
    likes: ["catnip", "milk"],
    birthday: {"month": 7, "day": 17, year: 1994}
  }

  function describeCat(cat) {
    console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
  }
  
  describeCat(lizzieTheCat);

  //Object methods
  /*
  var lizzieTheCat = {
    age: 18,
    furColor: 'grey',
    meow: function() {
      console.log('meowww');
    },
    eat: function(food) {
      console.log('Yum, I love ' + food);
    },
    sleep: function(numMinutes) {
      for (var i = 0; i < numMinutes; i++) {
        console.log('z');
      }
    }
  };

  lizzieTheCat.meow();
lizzieTheCat.eat('brown mushy stuff');
lizzieTheCat.sleep(10);
*/
//Object pro tip
var lizzieTheCat = {
    age: 18,
    furColor: 'grey',
    meow: function() {
      console.log('meowww');
    },
    eat: function(food) {
      console.log('Yum, I love ' + food);
    },
    sleep: function(numMinutes) {
      for (var i = 0; i < numMinutes; i++) {
        console.log('z');
      }
    }
  };

  Object.keys(lizzieTheCat); // ["age", "furColor", "meow", "eat", "sleep"]
  console.log(Object.keys(lizzieTheCat));
  console.log(lizzieTheCat);