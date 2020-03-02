// Input
var cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  function cashRegister(cart){
    var items = Object.keys(cart); // array of items by key   
    var sum = 0; 
  console.log(items)  
    for (var i = 0; i < items.length; i++) {
      var itemName = items[i]; // get the name of the key for the item
      console.log(itemName);
      var itemPrice = cart[itemName]; // get the price for the item
      console.log(itemPrice);
      sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
      console.log(sum);
    }
  
    return sum;
  }
  cashRegister(cartForParty)