const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));


const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)


//Converting a for loop to forEach
const items = ['item1', 'item2', 'item3']
const copy = []

//1) before
/*
for (let i = 0; i < items.length; i++) {
  copy.push(items[i])
}
*/


//2) after
items.forEach(function(item){
  copy.push(item)
})

//3)
items.forEach((item)=> copy.push(item))

console.log(copy);

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
  }

