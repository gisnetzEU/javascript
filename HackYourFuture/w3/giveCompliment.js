function giveCompliment(){
    var arg = document.getElementById('name').value;
    var compliments = ["great", "awesome","fantastic","handsome"];
    var myResult = document.getElementById('result');
    return  myResult.innerText = arg +" is " +compliments[Math.floor(Math.random() * 4)];
     
}

