let fruits = ['Apple', 'Banana']

console.log(fruits.length)

let first = fruits[0];
console.log(first)

let last = fruits[fruits.length -1]
console.log(last);

fruits.forEach(function(item, index, array) {
    console.log(item, index)
  })



  function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
  }


  logArrayElements(1,2,[1,4,7]);