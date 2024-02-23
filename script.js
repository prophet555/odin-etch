// select container
var containerDiv = document.querySelector('.container');

// and give it some content
// var newContent = document.createTextNode("Hi there and greetings!");
// newDiv.appendChild(newContent); //add the text node to the newly created div.

for (var i = 0; i < 256; i++) {
  // create a new div element
  var newDiv = document.createElement("div");
  //add class to the div
  newDiv.classList.add("box");
  /* var newContent = document.createTextNode("d" + (i+1));
    newDiv.appendChild(newContent); */
  //append to container
  containerDiv.appendChild(newDiv);
}






