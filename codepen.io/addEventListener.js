var KEYCODES = {
    f: 70,
    enter: 13,
    left: 37,
    up: 38,
    right: 39,
    down: 40
  }
  
  // me: when teacher button is clicked, broadcast an alert saying "i like the way you click."
  
  var tchrButton = document.querySelector('#teacherButton')
  
  var clickHandler = function() {
    alert('i like the way you click!')
  }
  
  tchrButton.addEventListener('click', clickHandler)
  
  // you: when student button is clicked, make bmo disappear (use the opacity property)
  
    // grab student button
    // grab bmo
  
  var studentButton = document.querySelector('#studentButton'),
      bmoEl = document.querySelector('#bmo')
  
  var bmoState = {
    speed: 100,
    showing: true,
    facingRight: true,
    top: 0,
    left: 0
  }
  
  studentButton.addEventListener('click', function() {
      // change bmo's opacity to 0
      if (bmoState.showing) { // if bmo is showing, hide her
        bmoEl.style.opacity = '0'
        bmoState.showing = false
      }
      else { // if she is hiding, show her
        bmoEl.style.opacity = '1'
        bmoState.showing = true
      }
    })
  
  // me: when the space bar is pressed, bmo should flip from right to left. 
  
  var moveBmo = function(eventObject) {
    // check whether space was pressed
    if (eventObject.keyCode === KEYCODES.f) {
      // if so, flip bmo
      if (bmoState.facingRight) {
        bmoEl.style.transform = 'rotateY(180deg)' 
        bmoState.facingRight = false
      }
      else {
        bmoEl.style.transform = 'rotateY(0deg)'
        bmoState.facingRight = true
      }
    }  
    
    // handle up movement
    
    if (eventObject.keyCode === KEYCODES.up) {
      bmoState.top -= bmoState.speed
      bmoEl.style.top = bmoState.top + 'px'
    }  
    if (eventObject.keyCode === KEYCODES.down) {
      bmoState.top += bmoState.speed
      bmoEl.style.top = bmoState.top + 'px'
    }  
    if (eventObject.keyCode === KEYCODES.left) {
      bmoState.left -= bmoState.speed
      bmoEl.style.left = bmoState.left + 'px'
    }  
    if (eventObject.keyCode === KEYCODES.right) {
      bmoState.left += bmoState.speed
      bmoEl.style.left = bmoState.left + 'px'
    }
  }
  
  window.addEventListener('keydown', moveBmo)
  
  
  // you: make the flipping action toggle as well.
  
  // me: up arrow moves bmo up by 10px (toPx)
  // hint: bmo is absolutely positioned, so you can use the top, right, bottom & left properties at will.
    
  // you: give bmo 4 directions of movement 
  
  
  // us: when the user types something into the input bar, whatever they've typed should get added to the #itemsList
  var inputNode = document.querySelector('input[type="text"]')
  console.log(inputNode)
  var itemNode = document.querySelector('#itemsList')
  console.log(itemNode)
  //Add event listener to inputNode
  //This function is going to receive input text from the input field when we keydown enter
  inputNode.addEventListener('keydown', function(pineapplePimp){
    if (pineapplePimp.keyCode === KEYCODES.enter) {
      //create an li element: method one - set user text as li's text content. append the li as a child of the ul.
      //method two
      console.log(pineapplePimp.target.value)
      itemNode.appendChild(pineapplePimp.target.value)
      }
    
  })
                             
                             
                          
  // us, time permitting: an added listItem should include a remove button.
  
  
  
  