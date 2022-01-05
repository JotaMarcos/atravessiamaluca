function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor1();
    verificaColisao();
    incluiPontos()
  }