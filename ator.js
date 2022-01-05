// código do ator
let xAtor1 = 100;
let yAtor1 = 366;
let comprimentoAtor1 = 30;
let alturaAtor1 = 30;
let colisao = false;

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