//variable donde se guardara mi nombre 
let name = "marcela lopez";
//console.log que mostrara mi nombre en mayuscula
console.log(name.toUpperCase());

//corte a la primera inicial y la guarda
let primeraInicial = name.slice(0, 1);
//al no tener un valor exacto de la segunda incicial se indica su ubicacion
let segundaInicial = name.indexOf(" ") + 1;
// corte a la segunda inicial y la guarda
let segundaInicial = name.slice(posicionSegundaInicial, posicionSegundaInicial + 1);
//console.log para ver iniciales en mayusculas
console.log(primeraInicial.toUpperCase() + segundaInicial.toUpperCase());