const prompt = require('prompt-sync') ();

var divida = prompt ("Digite o valor da sua dívida");

emprestimo = Math.abs(divida)*-1;

  console.log("O valor da sua dívida é de: R$", emprestimo, "e você terá um empréstimo liberado de: R$", divida);
