const prompt = require('prompt-sync') ();

  console.log("\n");
  console.log("¬¬¬¬¬¬¬¬¬¬¬¬ Financeira ¬¬¬¬¬¬¬¬¬¬¬¬ \n");
  console.log("\n");
var nome = prompt ("Digite o seu nome ==>");
var empresa = prompt ("Digite o nome da empresa que você trabalha ==>");
var funcao = prompt ("Digite a função que você exerce na empresa ==>");
var valor = prompt ("Digite o valor do empréstimo que você deseja ==>");
var emprestimo = (valor) * 0.86;

  console.log("Senhor", nome, "você está com sorte! Pela sua função de", funcao,"e sua excelente relação com a", empresa, ",foi aprovado um crédito em sua conta corrente de R$", emprestimo .toFixed(2));
