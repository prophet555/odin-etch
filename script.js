

// select container
var containerDiv = document.querySelector('.container');

// and give it some content
// var newContent = document.createTextNode("Hi there and greetings!");
// newDiv.appendChild(newContent); //add the text node to the newly created div.


const submitButton = document.getElementById('submit');


const createBoxes = () => {  
  //clear the container
  containerDiv.innerHTML = '';
  const userInput = document.getElementById('userInput').value;
  // check if userInput is empty or not a number
  if (userInput === '' || isNaN(userInput)) {
    alert('Please enter a valid number');
    return;
  } else if (userInput < 1 || userInput > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  };

  const totalBoxes = userInput * userInput;
  for (var i = 0; i < totalBoxes; i++) {
    // create a new div element
    var newDiv = document.createElement("div");
    //add class to the div
    newDiv.classList.add("box");
    /* var newContent = document.createTextNode("d" + (i+1));
      newDiv.appendChild(newContent); */
    //append to container
    newDiv.style.flex = `1 0 ${100 / userInput}%`;
    newDiv.style.height = `${960/userInput}px`;
    newDiv.style.width = `${960/userInput}px`;
    containerDiv.appendChild(newDiv);
  }

  //create color randomizer function for hover effect
  function randomColor(opacity) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ", " + (opacity || 1) + ")";
  }

  //create hover effect on mouseover
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.dataset.opacity = 0.1;

    box.addEventListener('mouseover', () => {
      var opacity = parseFloat(box.dataset.opacity);
      box.style.backgroundColor = randomColor(opacity);
      box.dataset.opacity = Math.min(opacity + 0.1, 1);
    });
  });
};


  

submitButton.addEventListener('click', createBoxes);





