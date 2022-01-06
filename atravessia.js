function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor1();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }