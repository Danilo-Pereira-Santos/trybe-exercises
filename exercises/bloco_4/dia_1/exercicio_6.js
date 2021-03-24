let peca = 'BISHP';

peca = peca.toLowerCase();

switch (peca){
  case 'king':
  console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.");
  break;
  case 'queen':
  console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
  break;
  case 'tower':
  console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
  break;
  case 'bishop':
  console.log('Move-se na diagonal, quantas casas quiser.');
  break;
  case 'hourse':
  console.log('Anda duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal,');
  break;
  case 'pawn':
  console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
  break;
  default:
  console.log('erro: peça inválida');
  break;
}