//do while

var i = 10;

/* do{
//programing code
}while(condition) */

/* do{
  console.log(i);
  i--;
}while(i>=1);

i = 1;
do{
    console.log(i);
    i++;
  }while(i<=10); */

/*   do{
      var test = Math.floor(Math.random() * Math.floor(100));
      i++;
  }while(test!=50);

  console.log(i); */

  var number;
  var sum=0;

  do{  //repeats do until return true
      number = parseInt(prompt('enter number'));
      sum +=number;
      console.log(sum);
      console.log(number);
  }while(number!=0)

  document.write(sum);