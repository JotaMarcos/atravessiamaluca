// código do carro
let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let comprimentoCarros = [50, 50, 50];
let alturaCarros = [40, 40, 40];
let velocidadeCarros = [2.5, 3, 3.5];


function mostraCarro(){
  image(imagemCarro1, xCarros[0], yCarros[0], comprimentoCarros[0], alturaCarros[0]);
  image(imagemCarro2, xCarros[1], yCarros[1], comprimentoCarros[1], alturaCarros[1]);
  image(imagemCarro3, xCarros[2], yCarros[2], comprimentoCarros[2], alturaCarros[2]);
}

function movimentaCarro() {
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];  
}

function voltaPosiciaInicialDoCarro(){
  if(xCarros[0] < -50){
    xCarros[0] = 600;
  }
  
  if(xCarros[1] < -50){
    xCarros[1] = 600;
  }
  
  if(xCarros[2] < -50){
    xCarros[2] = 600;
  }
  
}