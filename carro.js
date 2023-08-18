

//Indice []

let xCarros = [ 550 , 600 , 20, 600 , 600, 600]
let yCarros = [40,96,300, 210, 270, 318];
let velocidadeCarros = [4, 8 ,7, 5, 3.3,5]
let comprimentoCarro = 50
let alturaCarro = 40


function mostraCarro(){
         for (let i = 0; i < imagemCarros.length; i++ ){
           image(imagemCarros [i],  xCarros [i] ,  yCarros [i] , comprimentoCarro , alturaCarro);
           
    }
}
  
  
function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){
  xCarros [i] -= velocidadeCarros [i]
  }
}


function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){
  if (passouTodaATela(xCarros [i])){
    xCarros [i] = 600
  }
    }
      }


function passouTodaATela(xCarros){
  return xCarros  < -50
}

