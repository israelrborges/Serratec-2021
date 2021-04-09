
/*Exercicío Jessica Sampaio SQUAD CASA DO MONSTRO:
Requisitos para participar do processo seletivo para Residência em TIC/Software 2021.1. :
Morar na Região Serrana do RJ.
Possuir mais de 16 anos.
Possuir ensino médio completo.
Ter muita vontade de aprender, disciplina e comprometimento.
Ter disponibilidade de horário para realizar o curso.
Dedicação de pelo menos 8 horas/dia, 6 dias/semana, durante 4,5 meses.
Possuir Laptop com 4gb de RAM/ processador i5.
Dispor de uma infraestrutura mínima de internet de 15 Mbps.
Realizar a inscrição
*/
const ler=require("prompt-sync") ();
//Entrada
console.log("-----PROCESSO SELETIVO - Residência em TIC/Software.-----")
console.log("Requisitos para participar do processo seletivo.")
var nome= ler("Por favor digite seu nome completo: ");

var resposta1 = ler ("Mora na Região Serrana do RJ? R: sim ou nao ");
var resposta2= ler("Possui mais de 16 anos? ");
var resposta3= ler("Possui ensino médio completo? ");
var resposta4= ler("Tem disponibilidade para se dedicar de pelo menos 8 horas/dia, 6 dias/semana, durante 4,5 meses? ");
var resposta5= ler("Possui Laptop com 4gb de RAM/ processador i5? ");
var resposta6= ler("Dispõe de uma infraestrutura mínima de internet de 15 Mbps? "); 

//Processamento
var r = resposta1 == "sim" && resposta2 == "sim" && resposta3 == "sim" && resposta4 == "sim" && resposta5 == "sim" && resposta6 == "sim";
if (r) {
  console.log("Você está apto para se increver: ",nome);
  console.log("Inscrição Realizada! PARABÉNS!!! ",nome,"\n"
              + "Você você esta concorrendo a uma vaga no Programa de Residência em TIC / Software - 2021.1  :) ");
}
else {
console.log("Que pena... Você não possui os requisitos para realizar o curso :(");
}