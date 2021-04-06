const prompt = require('prompt-sync') ();

  console.log("\n");
  console.log("^^^^^^^^^^^^^^^^^^^^^ Rodízio de CPF ^^^^^^^^^^^^^^^^^^^^ \n");
  var cpf = prompt ("Caro cidadão, digite o valor do último digito do seu CPF ==> ");
  console.log("\n");

var dataAtual = new Date();
var dia = dataAtual.getDate();

  if (cpf % 2 === 0 && dia % 2 === 0) {;
       console.log("*** Hoje é dia", dia,"(par) e o seu CPF termina em", cpf, "(par) portanto você pode entrar na loja ***");
   } else if (cpf % 2 === 0 && dia %2 !== 0) {;
       console.log("*** Hoje é dia", dia, "(par) e o seu CPF termina em", cpf, "(ímpar) portanto você não pode entrar na loja ***");
   } else if (cpf % 2 !== 0 && dia % 2 !== 0) {;
       console.log("*** Hoje é dia", dia, "(ímpar) e o seu CPF termina em", cpf, "(ímpar) portanto você pode entrar na loja ***");
   } else if (cpf % 2 !== 0 && dia % 2 === 0) {;
       console.log("*** Hoje é dia", dia, "(par) e o seu CPF termina em", cpf, "(ímpar) portanto você não pode entrar na loja ***");
   }