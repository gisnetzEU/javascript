// 2/2/2020

var myButton = document.getElementById('myBtn');
//var inputProduct = document.getElementById("inputProduct").value;


let ProductList = [];
//var myButton = document.getElementById('myBtn');

function addProduct(product){
    //return ProductList.push(product);
    var inputProduct = document.getElementById("inputProduct").value;
    //Input value
    console.log(inputProduct);
    ProductList.push(inputProduct);
}

//function myFunction(){}
myButton.addEventListener("click", addProduct);

/*function myForEachFunction(value, index){
    console.log("Product Name: " + value);
}*/

ProductList.forEach((productName)=>{
    console.log(productName);
})

//addProduct('Apple');
console.log(ProductList);