const music = new Audio('fondo.mp3');
music.play();
music.loop =true;



//parte1
var Inf = document.getElementById('c');
var Information = document.getElementById('information');
var Fondo = document.getElementById('fon');
var tc = document.getElementById("tc");



document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 70;
necesarios = 110;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 110) {
      Fondo.classList.add('active');
      tiempo = 1000;

   }
 
}


function restarTiempo() {
   tiempo--;
   document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo;
   if (tiempo == 0) {
      alert("Te asercaste pero no le pegaste");
      tiempo = 0;
      puntos = 0;
      window.location = "juegom.html";

   }
}

setInterval(restarTiempo,1000);



function lobby() {
   window.location = "portada.html";
   
 
}

   
function ok() {
 
 window.location = "portada.html";
 
}

