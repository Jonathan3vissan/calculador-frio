const leer= require("prompt-sync")();

let metroCubico = 0;
let alto=0;
let largo =0;
let ancho=0;
let repuesta ="def"
let calcularMetros= (alto*largo*ancho);
console.log("buenas, vamos a determinar las frigorias que vas a necesitar como minimo");
console.log("empezemos");
console.log("primer punto, sabes cuales son tu metros cubicos de la habitacion?");
console.log("reponder SI o NO ");
repuesta =leer ();

if (repuesta== "si") {
    console.log("bien decime cuantos metros cubicos tenes");
    metroCubico= leer ();
    console.log("tu frigorias minimas para tus metros cubicos son",metroCubico*50,"frigorias");

    
}else{
console.log("bueno, no pasa nada , vamos a calcular tus metros cubicos !!!");
console.log("empezemos por el alto de la habitacion");
console.log("alto de la habitacion");
alto=leer();
console.log("bien, ahora, el largo de la habitacion, desde sus puntos mas alejados ");
largo =leer();
console.log("y por ultimo, vamos con el ancho de la habitacion desde sus puntos mas alejados");
ancho=leer ();
calcularMetros= alto*largo*ancho;
console.log("tenes",calcularMetros,"metros cubicos");
console.log("vas a necesitar un minimo de",calcularMetros*50,"frigorias");
}

