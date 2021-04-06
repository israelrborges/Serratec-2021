const prompt = require('prompt-sync') ();

  console.log("==========> Programa de Fidelidade <========== \n")
var cupom = prompt ("Digite o número de cupons que você tem:");
var pontos = (cupom)*3;  
console.log("O seu número de pontos acumulados no seu programa de Fidelidade é de:", pontos);