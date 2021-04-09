// Teatro do montro

// O teatro do monstro permite a entrada de até 5 pessoas, a peça só começa após atingir a lotação máxima, nesta peça é proibida a entrada de menores de 16 anos e o gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.

const prompt = require("prompt-sync")();

//Declaração de variáveis
const CAPACIDADE_MAXIMA = 4;
let contador = 0;
let homem = 0;
let mulher = 0;
let proximo = "Próximo";

//Cabeçalho
console.log("============ TEATRO MONSTRO ==========\n");

//Inicio Repetidor indefinido até (contador = capacidade máxima)
while(contador <= CAPACIDADE_MAXIMA){
   
    //inicio teste de idade    
    let idade = prompt("Seja bem-vindo, você tem mais de 16 anos? (sim/nao) ");

    if(idade == 'sim'){        
         contador++;
    } else if(idade == 'nao') {
        console.log("Entrada proibida para menores de 16 anos");
        console.log(proximo)
        continue;
    }//Fim teste de idade
    
    //Inicio teste de genero
    let genero = prompt("O/A convidado/a é homem ou mulher? ");

    if(genero == "homem"){
        homem = homem + 1;
        console.log("Tudo certo, o senhor pode entrar");        
    } else if(genero == "mulher"){
        mulher = mulher + 1;
        console.log("Tudo certo, a senhora pode entrar");
    }//Fim teste de genero

    console.log(proximo);
}//Fim da repetição

//Mensagens de saída
console.log("Hoje temos na plateia " + homem + " homens e " + mulher + " mulheres para o espetáculo");
console.log("A casa esta cheia");
console.log("Já podemos começar a apresentação");