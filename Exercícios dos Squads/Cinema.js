// CINEMA:

// 1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
// 2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, o ingresso irá informar seu número, nome de quem reservou e se é meia ou não.


//Reserva 5 ingressos. desses 2 para meia
//informar nome e se é meia ou nao
//permitido 1 reserva por nome
//o cliente retira o ingresso informando o nome
//o ingresso irá informar seu número, nome e se é meia


const prompt = require("prompt-sync")();

//Entrada

let nome = ''
let valor = ''
let lmtMeia = 2;
let listaNome = [];
let listaValor = [];
let valorAux = 0;
let retiradaIngresso;
let nomeRetirada;
let indiceRetirada;
let ingressoDesconto;
let indiceIngresso;


//Processamento

for(let i = 0 ; i < 5 ; i++){
    
    nome = prompt("Para reservar digite seu nome ");  


    var auxiliar = listaNome.indexOf(nome);
    if(auxiliar === -1) {
      console.log('Olá, ' + nome +' você pode realizar a reserva');
      listaNome.push(nome)
    } else {
      console.log("Infelizmente já temos uma reserva neste nome");
      break;
    }

    valor = prompt("O ingresso é de meia entrada? (sim / nao)");    
    

    if(valor == 'sim'){
        valorAux  = valorAux + 1;
        
    }

    if(valorAux > 2 && valor == 'sim'){
        console.log("Não temos mais a opção de meia entrada apenas valor de entrada inteira.");
        console.log("Ainda deseja realizar a reserva? ");

    } else {
        listaValor.push(valor);
    }       
}

retiradaIngresso = prompt("Diga seu nome para a retirar o ingresso ");

let buscarNome = listaNome.indexOf(retiradaIngresso);


listaNome.forEach(function(valor, indice){

    if(retiradaIngresso == valor){
        nomeRetirada = valor;
        indiceRetirada = indice;
    }   
   
})



listaValor.forEach(function(valor, indice){
    if(indiceRetirada == indice){

        ingressoDesconto = valor;
        indiceIngresso = indice;
        
    }
})

console.log(" Olá " + nomeRetirada + " Seu ingresso é o número " + indiceIngresso + " e você " + ingressoDesconto + " Teve desconto de meia entrada");

