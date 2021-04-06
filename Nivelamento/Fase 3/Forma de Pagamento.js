const prompt = require('prompt-sync') ();

  console.log("");
  console.log(" __________________________________ Forma de Pagamento ________________________________ \n|");
  console.log("| Agradecemos pela compra, digite o número referente à uma das opções de pagamento abaixo:");
  console.log("|(1) - 3 x sem juros");
  console.log("|(2) - 5 x sem juros");
  console.log("|(3) - 10 x com 1,5% de juros")

var A = (345 + 1545) / 3;
var B = (345 + 1545) /5;
var C = ((345 + 1545) * 1.015)/ 10;
var preço = prompt ("| ");

    if ( preço <= 1 ) {;
        console.log("|__________ A forma de pagamento escolhida foi de 3 x de R$", A .toFixed(2), "sem juros ____________");
        } else if ( preço <= 2) {;
        console.log("|__________ A forma de pagamento escolhida foi de 5 x de R$", B .toFixed(2), "sem juros __________");
        } else if (preço => 3) {;
        console.log("|_____ A forma de pagamento escolhida, com 1,5% de juros, foi de 10 x de R$", C .toFixed(2),"______" );
        }



