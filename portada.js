const music = new Audio('musica.mp3');
music.play();
music.loop =true;


//parte1
var Inf = document.getElementById('c');
var Information = document.getElementById('information');
var Fondo = document.getElementById('fon');
var eliminar = document.getElementById('x');

function vamos() {
    window.location = "juego.html";
    
  
}
function play2() {
    window.location = "inicio.html";
    //el otro juego
   
}
function play3() {
    window.location = "juegom.html";
    //el otro juego
   
}

function play4() {
    window.location = "galaxy.html";
    //el otro juego
   
}

function play5() {
    window.location = "game.html";
    //el otro juego
   
}





 //1

 Inf.addEventListener('click', function(){
    Fondo.classList.add('active')
    
 });

 eliminar.addEventListener('click', function(){
    Fondo.classList.remove('active')
 });
