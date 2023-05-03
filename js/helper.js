// generar un número aleatorio
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// obtener la distancia de dos puntos
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// devuelve un String en función de las distancias 
let getDistanceHint = distance => {
  if (distance <30) {
    return "¡Extremadamente caliente!";
  } else if (distance < 40) {
    return "¡Muy Caliente!";
  } else if (distance < 80) {
    return "¡Caliente!";
  } else if (distance < 160) {
    return "¡Tibio!";
  } else if (distance < 325) {
    return "¡Frío!";
  } else if (distance < 650) {
    return "¡Muy frío!";
  } else {
    return "¡Extremadamente frío!";
  }
}
