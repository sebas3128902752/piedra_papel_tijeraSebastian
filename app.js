
const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const imgSelected = document.getElementById('img-selected');
const cpuSelected = document.getElementById('cpu-selected');
const userPoints = document.getElementById('user-points');
const cpuPoints = document.getElementById('cpu-points');
const btnReload = document.getElementById('btn-reload');
const gameResult = document.getElementById('h3-result');


const rock = 1;
const paper = 2;
const scissors = 3;

let userSelect = 0;
let cpuSelect = 0;


let userPoint = 0;
let cpuPoint = 0;



btnRock.addEventListener('click', ()=> {
  imgSelected.src = "imagenes/piedra.png";
  userSelect = 1;
  turnCpu();
  calculatePoints();
  finalScore();   
});

btnPaper.addEventListener('click', ()=>{
  imgSelected.src = "imagenes/papel.png";
  userSelect = 2;
  turnCpu();
  calculatePoints(); 
  finalScore();  
}) 

btnScissors.addEventListener('click', ()=>{
  imgSelected.src = "imagenes/tijera.png";
  userSelect = 3;
  turnCpu();
  calculatePoints();
  finalScore();   
})

btnReload.addEventListener('click', ()=>{
  userPoint = 0;
  cpuPoint = 0;
  userPoints.textContent = userPoint;
  cpuPoints.textContent = cpuPoint;
  gameResult.textContent = "resultado";
});


function turnCpu() {
  let turn = randomNum(1,4);
  if (turn === 1) {
    cpuSelected.src = "imagenes/piedra.png";
    cpuSelect = 1;
  } else if (turn === 2) {
    cpuSelected.src = "imagenes/papel.png";
    cpuSelect = 2;
  } else {
    cpuSelected.src = "imagenes/tijera.png";  
    cpuSelect = 3;
  } 
}

function calculatePoints() {
  if (userSelect === cpuSelect) {
    gameResult.textContent = "¡Los jugadores empatan!";    
  } else if( (userSelect === 1 && cpuSelect === 3) || (userSelect === 2 && cpuSelect === 1) || (userSelect === 3 && cpuSelect === 2)) {
    gameResult.textContent = "Usuario gana!";    
    userPoint++;
    userPoints.textContent = userPoint;
  } else {
    gameResult.textContent = "pc gana";    
    cpuPoint++;
    cpuPoints.textContent = cpuPoint;
  } 
}

function finalScore() {
 if (userPoint === 3) {
  alert('¡El usuario es el ganador!');  
  return;
} else if(cpuPoint === 3) {
   alert('¡el pc es el ganador!')   
   return;
 }
}