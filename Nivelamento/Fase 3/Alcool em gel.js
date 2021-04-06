const prompt = require('prompt-sync') ();

  console.log("**************** Cálculo de Álcool e Gel ********************** \n")
var garrafa = prompt ("Digite a capacidade em mililitros que a garrafa possui:");
var gel = (garrafa) * 0.3;
var alcool = (garrafa) * 0.7;

  console.log("A quantidade de gel necessária para essa garrafa é de:", gel .toFixed(2), "ml \n");
  console.log("A quantidade de alcool necessária para essa garrafa é de:", alcool .toFixed(2), "ml");