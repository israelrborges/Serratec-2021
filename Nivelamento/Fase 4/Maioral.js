const prompt = require('prompt-sync') ();

  console.log("\n");
  console.log(">>>>>>>>>>> O Maioral <<<<<<<<<<<< \n");

var player1 = prompt ("Player 1: Digite um valor ==>");
var player2 = prompt ("Player 2: Digite um valor ==>");
var resultado1 = player1 > player2;
var resultado2 = player2 > player1;
var resultado3 = player1 == player2;

  console.log("\n");
  if (player1 > player2) {;
      console.log("Player 1 venceu?",resultado1);
  } else if (player2 > player1) {;
      console.log("Player 2 venceu?", resultado2);
  } else if (player1 = player2) {;
      console.log("Houve empate?", resultado3);
}