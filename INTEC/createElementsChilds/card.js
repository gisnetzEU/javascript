//div container parent of both
var myContainer = document.createElement('div');
myContainer.className = "container"
//myCard
var myCard = document.createElement('div');
myCard.className="card";
myCard.style="width: 18rem;";

//myImg
var myImg = document.createElement('img');
myImg.className='card-img-top';
myImg.src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg";
myImg.alt="...";

var myCardBody = document.createElement('div');
myCardBody.className = "card-body";

var myH5 = document.createElement('h5');
myH5.className = "card-title"
myH5.textContent="Card title";

var myParagraph = document.createElement('p');
myParagraph.className = "card-text"
myParagraph.textContent ="Some quick example text to build on the card title and make up the bulk of the card's content.";

var myA = document.createElement('a');
myA.href="#";
myA.className = "btn btn-primary";
myA.textContent="Go somewhere";


myCard.appendChild(myImg);
myContainer.appendChild(myCard);

myCard.appendChild(myCardBody);
myCardBody.appendChild(myH5);
myCardBody.appendChild(myParagraph);
myCardBody.appendChild(myA);

console.log(myContainer);

/* createElement('img');
MediaKeyMessageEvent.src="google.com/image.jpg"
createElement.innerHTML
 */

document.body.appendChild(myContainer);