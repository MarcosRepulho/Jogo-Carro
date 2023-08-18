//Variaveis e Funções de Imagem e sons



let imageDaEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let sonsColidiu;
let sonsPontos;
let sonsTrilha;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemAtor = loadImage("Imagens/ator-1.png")
  imagemCarro = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]


sonsTrilha = loadSound("sons/trilha.mp3");
sonsPontos = loadSound("sons/pontos.wav");
sonsColidiu = loadSound("sons/colidiu.mp3");
  
}