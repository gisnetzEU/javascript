//loop

var x = 0;
while (x < 5) {
    console.log(x);
    x = x + 1;
  }

//
  var age = 20;
if (age >= 35) {
  console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You have no voice in government!');
}
//

for (var i = 0; i < 5; i = i + 1) {
    console.log(i);
  }


//
for (var current = 100; current < 200; current++) {
    console.log('Testing ' + current);
    if (current % 7 == 0) {
      console.log('Found it! ' + current);
      break;
    }
  }

  for (var i = 1; i <= 20; i++) {
    if (i%2 == 0)
    console.log(i , "is even");
    else console.log(i);
  }
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
    console.log(i,"*",j,"=",i*j);
  }
}