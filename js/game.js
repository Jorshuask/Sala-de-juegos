const WIDTH = 650;
const HEIGH = 400;

const music = new Audio('harry.mp3');
music.play();
music.loop =true;


let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;
  

  
//parte1
var Inf = document.getElementById('c');
var Information = document.getElementById('information');
var Fondo = document.getElementById('fon');
var tc = document.getElementById("tc");


  if (distance < 20 ) {
  
    Fondo.classList.add('active');
    
    tc.textContent = clicks;


    
  
    
  }
});


    
function ok() {
  
  window.location = "portada.html";
  
}


