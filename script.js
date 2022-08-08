const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let firstCard = null;
let secondCard = null;
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    
    //give it a default color
    newDiv.style.backgroundColor = "white";
    
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  console.log(event.target.backgroundColor);
  if(firstCard == null) {
    if (event.target.style.backgroundColor == "white") {
      firstCard = event.target;
      event.target.style.backgroundColor = event.target.classList[0];
    }
  }
  else if(secondCard == null && event.target != firstCard) {
    if (event.target.style.backgroundColor == "white") {
      secondCard = event.target;
      event.target.style.backgroundColor = event.target.classList[0];
      setTimeout(checkCards, 1000);
    }
  }
}

function checkCards() {
  console.log("checking cards...");
  if(firstCard.style.backgroundColor != secondCard.style.backgroundColor){
    console.log("not matching...");
    firstCard.style.backgroundColor = "white";
    secondCard.style.backgroundColor = "white";
  }
  firstCard = null;
  secondCard = null;
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */