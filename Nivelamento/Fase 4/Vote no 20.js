const prompt = require('prompt-sync') ();
  
  console.log("\n");
  console.log(" +++++++++++++ Eleições 2021 ++++++++++++++ \n");
  console.log(" Caro eleitor, digite abaixo a sua idade para");
  console.log("que possamos identificar se você está apto ou");
  console.log("não para votar nas Eleições de 2021. \n");

var idade = prompt ("==>");

  if (idade >= 16) {
  console.log("Parabéns, você está apto para votar nas Eleições 2021!");
  } else {(console.log("Infelizmente você não poderá votar nas Eleições 2021."));
}