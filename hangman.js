const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
  fruits: [
    "Apple",
    "Blueberry",
    "Mandarin",
    "Pineapple",
    "Pomegranate",
    "Watermelon",
  ],
  
  countries: [
    "India",
    "Hungary",
    "Kyrgyzstan",
    "Switzerland",
    "Zimbabwe",
    "Dominica",
  ],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 5) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;


  const head = () => {
    context.beginPath();
    context.arc(250,105,75,0,2*Math.PI);
    context.stroke();
  };

  const body = () => {
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(250,180);
    context.closePath();
    context.stroke()
  };

  const leftArm = () => {
    context.beginPath();
    context.moveTo(250, 250);
    context.lineTo(100,100);
    context.closePath();
    context.stroke()
  };

  const rightArm = () => {
    context.beginPath();
    context.moveTo(250,250);
    context.lineTo(400,100);
    context.closePath();
    context.stroke()
  };

  const leftLeg = () => {
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(100,500);
    context.closePath();
    context.stroke()
  };

  const rightLeg = () => {
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(400,500);
    context.closePath();
    context.stroke()
  };

  const deadEyes = () => {
    //left eye
    context.beginPath();
    context.moveTo(230,120);
    context.lineTo(200,100);
    context.closePath();

    context.moveTo(230,100);
    context.lineTo(200,120);
    context.closePath();
    context.stroke()
    //right eye
    context.moveTo(300,120);
    context.lineTo(270,100);
    
    context.moveTo(300,100);
    context.lineTo(270,120);
    context.closePath();
    context.stroke()
  };


  // NEW LIMBS 
  const rightLegNew = () => {
    context.beginPath();
    context.moveTo(280,420);
    context.lineTo(400,500);
    context.closePath();
    context.stroke()
  };

  const leftLegNew = () => {
    context.beginPath();
    context.moveTo(220,420);
    context.lineTo(100,500);
    context.closePath();
    context.stroke()
  };

  const rightArmNew = () => {
    context.beginPath();
    context.moveTo(280,220);
    context.lineTo(400,100);
    context.closePath();
    context.stroke()
  };

  const leftArmNew = () => {
    context.beginPath();
    context.moveTo(220, 220);
    context.lineTo(100,100);
    context.closePath();
    context.stroke()
  };

  const headNew = () => {
    context.beginPath();
    context.arc(250,85,75,0,2*Math.PI);
    context.stroke();
  };

  // END OF NEW LIMBS

  // START OF PULL LIMB FUNCTIONS
  
  const rightLegPull = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    head();
    body();
    leftArm();
    rightArm();
    leftLeg();
    rightLegNew();
    drawChains();
    
    
    
    
  };

  const leftLegPull = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    head();
    body();
    leftArm();
    rightArm();
    leftLegNew();
    rightLegNew();
    drawChains();
    
    
    
    
    
  };

  const rightArmPull = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    head();
    body();
    leftArm();
    rightArmNew();
    leftLegNew();
    rightLegNew();
    drawChains();
    
    
    
    
  };

  const leftArmPull = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    head();
    body();
    leftArmNew();
    rightArmNew();
    leftLegNew();
    rightLegNew();
    drawChains();
    
    
    
    
  };

  const headPull = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    headNew();
    body();
    leftArmNew();
    rightArmNew();
    leftLegNew();
    rightLegNew();
    deadEyes();
    drawChains();
    
    
    
    
  };

  // END OF PULL LIMB FUNCTIONS

  const drawChains = () => {
    // Bottom Left Chain
    context.beginPath();
    context.moveTo(0, 600);
    context.lineTo(100, 500);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();

    // Bottom Right Chain
    context.beginPath();
    context.moveTo(500, 600);
    context.lineTo(400, 500);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();

    // Top Right Chain
    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(400, 100);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();

    // Top Left Chain
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(100, 100);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();
  }

  

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    head();
    rightArm();
    leftArm();
    body();
    rightLeg();
    leftLeg();
    drawChains();
  };

  return { initialDrawing, rightLegPull, leftLegPull, rightArmPull, leftArmPull,headPull, leftArmNew, rightArmNew, rightLegNew, leftLegNew, headNew};
};


//draw the man
const drawMan = (count) => {
  let { body, leftArm, rightArm, leftLeg, rightLeg, rightLegPull, leftLegPull,rightArmPull,leftArmPull,headPull, rightLegNew, leftArmNew, rightArmNew, leftLegNew} = canvasCreator();
  switch (count) {
    case 1:
      rightLegPull();
     
      break;
    case 2:
      leftLegPull();
     
      break;
    case 3:
      rightArmPull();
      
      break;
    case 4:
      leftArmPull();
      break;
    case 5:
      headPull();
      break;
      default:
      break;
    
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;