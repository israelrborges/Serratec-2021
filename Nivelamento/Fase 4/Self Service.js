const prompt = require('prompt-sync') ();

  console.log("\n");
  console.log(">>>>>>>>>>>>>> Self Service <<<<<<<<<<<<<<<");
  console.log("\n");

var preco = prompt ("Digite o preço do quilo ==> R$");
var peso = prompt ("Digite o peso registrado na balança (Digite o valor em gramas Ex.: 500g, 600g) ==> ");
var valortotal = (preco * peso)/1000;

  console.log("\n");
  console.log(">>>>>>>>>>>>>> Self Service <<<<<<<<<<<<<<<");
  console.log("\n");
  console.log("Restaurante bom Apetite!");
  console.log("Avenida Delfim Moreira nº 100 - Várzea, Teresópolis/RJ");
  console.log("CNPJ: 13.133.133/0001-13")
  console.log("\n");
  console.log("Preço de 100g ------------   R$ 2.50");
  console.log("Tara do prato ------------ - 0,465 Kg");
  console.log("Valor pesado -------------  ", (peso / 1000) .toFixed(3),"Kg");
  console.log("                          _____________");
  console.log("Total --------------------   R$", valortotal .toFixed(2));