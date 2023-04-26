let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

drawLeftArm(canvas);
drawTorso(canvas);
drawRightArm(canvas);
drawLeftLeg(canvas);
drawRightLeg(canvas);
drawHead(canvas);
drawChains(canvas);
var alpha = [abcdefghijklmnopqrstuvwxyz];

var words = [
    "Cats",
    "Dogs",
    "Fruit",
]

let answer = ''
let maxWrong = 5;
let mistakes = 0;
let guessed = [];

   /**  function randomWord() {
        answer = words[Math.floor(Math.random() * words.length)];
    } **/

    
        function printBtn() {
            for (var i = 0; i < words.length; i++) {
               var btn = document.createElement("button");
               var t = document.createTextNode(words[i]);
               btn.appendChild(t);
               document.body.appendChild(btn);
                }
            }
            
       
    

            window.onload = printBtn();






function drawLeftArm(canvas) {
    context.beginPath();
    context.moveTo(250, 250);
    context.lineTo(100,100);
    context.closePath();
    context.stroke()
}

function drawTorso(canvas){
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(250,180);
    context.closePath();
    context.stroke()
}

function drawRightArm(canvas) {
    context.beginPath();
    context.moveTo(250,250);
    context.lineTo(400,100);
    context.closePath();
    context.stroke()
}

function drawLeftLeg(canvas) {
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(100,500);
    context.closePath();
    context.stroke()
}

function drawRightLeg(canvas) {
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(400,500);
    context.closePath();
    context.stroke()
}

function drawHead(canvas) {
    context.beginPath();
    context.arc(250,105,75,0,2*Math.PI);
    context.stroke();
}  

function drawChains(canvas) {
    // Bottom Left Chain
    context.beginPath();
    context.moveTo(0,600);
    context.lineTo(100,500);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();

    // Bottom Right Chain
    context.beginPath();
    context.moveTo(500,600);
    context.lineTo(400,500);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();
    
    // Top Right Chain
    context.beginPath();
    context.moveTo(500,0);
    context.lineTo(400,100);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();

    // Top Left Chain
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(100,100);
    context.closePath();
    context.strokeStyle = "#FF0000";
    context.stroke();
}


    



