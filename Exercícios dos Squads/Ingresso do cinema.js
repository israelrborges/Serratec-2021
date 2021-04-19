const prompt = require("prompt-sync")();

const CAPACIDADE_MAXIMA = 4;
const CAPACIDADE_MAXIMA2 = 1;
let contador = 0;
let contador2 = 0;

console.log("\n");
console.log("_________________________CINEMA CASA DO MONSTRO _________________________");
console.log("|                                                                        |");
console.log("|** Atenção, não é permitida a venda de ingressos para a mesma pessoa ***|\n");
while(contador <= CAPACIDADE_MAXIMA && contador2 <= CAPACIDADE_MAXIMA2){
   
    let nome1 = prompt("Digite seu nome: ");
    let idade = prompt("Seja bem-vindo,é inteira? (sim/nao) ");

    if(idade == 'sim'){
        console.log(nome1 + " - Ingresso Inteiro - Ingresso nº:" + (Math.random(2)*1000).toFixed(4), "\n");
        contador++ != contador;
    } else if(idade == 'nao') {;
        console.log(nome1 + " - Ingresso Meia Entrada - Ingresso nº:" + (Math.random(2)*1000).toFixed(4), "\n");
        contador2++;
    }
}
const TOTAL = 5 - (contador+contador2);
    console.log("\n");
    console.log("Atingimos a capacidade máxima de meia e temos", contador, "ingressos inteiros vendidos");
    console.log("A partir de agora só venderemos mais", TOTAL, "ingresso(s) inteiro(s)");
    console.log("Ingressos meia vendidos:", contador2);
    console.log("\n"); 

var ultimos = 0;
while (ultimos < TOTAL){;
    let nome2 = prompt ("Digite seu nome: ");
    console.log(nome2, " - Ingresso Inteiro - Ingresso nº:" + (Math.random(2)*1000).toFixed(4));
    ultimos++;
}
    console.log("*** Ingressos esgotados ***")