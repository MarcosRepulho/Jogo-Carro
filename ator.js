//Codigo do Ator

let yAtor = 369;
let xAtor = 100;
let colisao = false;
let meusPontos = 0


function mostraAtor(){
  image(imagemAtor, xAtor , yAtor , 30 , 30);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
   if (podeSeMover()){
    
    yAtor += 3
   }
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++ ){
       colisao = collideRectCircle(xCarros [i], yCarros[i], comprimentoCarro, alturaCarro,xAtor, yAtor, 15)
    
    if (colisao){
        colidiu()
      sonsColidiu.play()
      if (pontosMaiorQueZero()){
      meusPontos -= 1
      }
      }
    }    
}

  function colidiu(){
    yAtor = 369
  }

function incluiPontos(){
  textSize(25)
  fill(color (255,240,60))
  textAlign(CENTER)
  text (meusPontos, width / 5 , 25 )
}

function marcaPontos(){
  
  if (yAtor < 15){
    meusPontos += 1
    sonsPontos.play()
    colidiu()
  }
  
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

  function podeSeMover(){
    return yAtor < 366
  }