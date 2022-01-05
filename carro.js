// código do carro
let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let comprimentoCarros = [50, 50, 50];
let alturaCarros = [40, 40, 40];
let velocidadeCarros = [2.5, 3, 3.5];


function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i]);
    }
}

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosiciaInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(passouTodaTela(xCarros[i])){
            xCarros[i] = 600;
          }
    }
}

function passouTodaTela(xCarro){
    return xCarro < -50;
}