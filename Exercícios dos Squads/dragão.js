/*
/Crie um jogo em que você vai ter que escolher entre 3 armas para enfrentar o grande dragão malvado "Programadragão". 
As armas são uma espada, uma faca e um sapato.
 Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, 
 o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.
 */

 const prompt = require("prompt-sync")();
 
 var arma1 = ("Espada");
     arma1 = Number(arma1);
 var arma2 = ("Faca");
     arma2 = Number(arma2);
 var arma3 = ("Sapato");
     arma3 = Number(arma3);
 
 var heroi = prompt("Digite o nome do seu Heroi: ");
 
 console.log('Arma 1 -> Espada');
 console.log('Arma 2 -> Faca');
 console.log('Arma 3 -> Sapato');
 
 let escolha = prompt("Olá " + heroi + ", qual arma você deseja para matar o Dragão? ");
 
 if (escolha == 1){
     console.log("Parabéns Lord: ", heroi, "O Dragão está morto.");
 } 
 else {
     console.log("Que Pena! :( A sua arma não foi capaz de derrotar o Dragão");
 }