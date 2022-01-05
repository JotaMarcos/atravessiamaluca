// código do ator
let xAtor1 = 100;
let yAtor1 = 366;
let comprimentoAtor1 = 30;
let alturaAtor1 = 30;

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
  