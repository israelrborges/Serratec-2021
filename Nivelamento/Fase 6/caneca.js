const ler = require("prompt-sync")();

const RESPOSTA = "resultado";

for (i = 0; i < 3; i++) {
  var chance = 2;
  var acerto;

  do {
    var resposta = ler("O que é mais importante, a expressão ou o resultado? ");
    acerto = resposta === RESPOSTA;
    chance--;
  } while (chance > 0 && !acerto);

  if (acerto) console.log("Parabéns! Ganhou a caneca com seu nome.");
  else console.log("Que pena.. fica pra próxima");
}

console.log("Parabéns aos ganhadores!");