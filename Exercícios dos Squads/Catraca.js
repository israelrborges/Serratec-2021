/*CATRACA:

A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:
Quantas pessoas ja entraram no onibus até o momento; 
Se a pessoa é pagante ou entra com gratuidade;
O total dos ganho até o momento (Considerando a passagem a R$ 4,40).
*/

const prompt = require("prompt-sync")();

const CAPACIDADE_MAXIMA = 4;
var contador = 0;
var valorTotal = 0.0;

console.log("============ CATRACA ==========\n");

while (contador <= CAPACIDADE_MAXIMA) {
    var passageiro = prompt("O passageiro é pagante? [S ou N]: ");
    if (passageiro == "S")
        valorTotal = valorTotal + 4.40;
    else {
        console.log("Você usou a gratuidade. ")
    }    
    contador++; 
    console.log("A quantidade de pessoas no onibus até agora é: " + contador);  
}

console.log("O valor total ganho foi: R$ " + valorTotal.toFixed(2));

   
