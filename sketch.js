deixe palavra

configu de funç(){
  criarCanvas (400 , 400);
  
  palavra = palavraAleatória();
  
}

function palavraAleatória () {
  
  let palavras = ["caminhante" , "caminho","caminha"];

  retornar aleatório (palavras);
}

function inicializaCores (){
  fundo ("branco");
  preencher ("preto");
  tamanhodotexto (64);
  textAlign ( CENTRO , CENTRO);
}

function  palavraParcial (minimo , maximo){
  deixe quantidade = mapa(mouseX , mínimo , máximo ,1 ,palavra . length);
  deixe parcial = palavra.substring ( 0, quantidade );
  retorno parcial ;
}

função desenhar () { 

inicializacores();
  
  let texto = palavraparcial(0, width 
                             
 text(texto, 200, 200);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("você precisa ligar o modo escuro!");
  } else {
    colsole.log("modo noturno não é necessário neste momento.");
  }
}

modonoturno(15);
modonoturno(20)
