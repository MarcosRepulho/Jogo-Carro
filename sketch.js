


function setup() {
  createCanvas(600, 400);
  sonsTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro()
  verificaColisao();
  incluiPontos();
  marcaPontos();
  
}

