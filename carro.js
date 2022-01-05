// código do carro
let xCarro1 = 600;
let xCarro2 = 600;
let xCarro3 = 600;

let yCarro1 = 40;
let yCarro2 = 100;
let yCarro3 = 150;

let comprimentoCarro1 = 50;
let comprimentoCarro2 = 50;
let comprimentoCarro3 = 50;

let alturaCarro1 = 40;
let alturaCarro2 = 40;
let alturaCarro3 = 40;


function mostraCarro(){
  image(imagemCarro1, xCarro1, yCarro1, comprimentoCarro1, alturaCarro1);
  image(imagemCarro2, xCarro2, yCarro2, comprimentoCarro1, alturaCarro2);
  image(imagemCarro3, xCarro3, yCarro3, comprimentoCarro1, alturaCarro2);
}

function movimentaCarro() {
  xCarro1 -= 2;
  xCarro2 -= 3;
  xCarro3 -= 4;
}