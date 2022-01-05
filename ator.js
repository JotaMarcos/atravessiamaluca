// código do ator
let xAtor1 = 96;
let yAtor1 = 366;
let comprimentoAtor1 = 30;
let alturaAtor1 = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor1, xAtor1, yAtor1, comprimentoAtor1, alturaAtor1);
  }


function movimentaAtor1(){
    if(keyIsDown(UP_ARROW)){
      yAtor1 -= 3;   
    }
    
    if(keyIsDown(DOWN_ARROW)){
      yAtor1 += 3;   
    }
  }

  function verificaColisao(){
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i], xAtor1, yAtor1, 15);
        if(colisao){
            colidiu();
        }
    }
  }

  function colidiu() {
      yAtor1 = 366;
  }

  function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(meusPontos, width / 5, 27);
}