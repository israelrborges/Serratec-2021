/* NO PROGRAMA DECRETO FÁCIL OS FISCAIS DA PREFEITURA DE TERESÓPOLIS LOCALIZADOS NAS ENTRADAS DA CIDADE
IRÃO VERIFICAR SE VOCÊ É MORADOR OU NÃO DA CIDADE. CASO A RESPOSTA SEJA NÃO O PROGRAMA RESPONDERÁ QUE VOCÊ NÃO PODE ENTRAR, 
AO MENOS QUE EXERÇA UMA DAS PROFISSÕES LIBERADAS PRA IR E VIR NA CIDADE. CASO A RESPOSTA SEJA SIM  VOCÊ DIGITARÁ 
O SEU CPF E O PROGRAMA VAI DIZER SE VOCÊ PODE OU NÃO CIRCULAR PELA CIDADE DEVIDO AO RODÍZIO DE CPF, CASO NEGATIVO 
VOCÊ NÃO PODERÁ CIRCULAR PELA CIDADE.

* DIGITE SEU NOME COMPLETO

* É MORADOR? SIM OU NÃO
    SE SIM, DIGITE O SEU CPF
        SE O DIA FOR PAR E O CPF PAR, PODE CIRCULAR
        SE O DIA FOR PAR E O CPF IMPAR, NÃO PODE CIRCULAR 
        SE O DIA FOR IMPAR E O CPF IMPAR, PODE CIRCULAR
        SE O DIA FOR IMPAR E O CPF PAR, NÃO PODE CIRCULAR
   SE NÃO, INFORME SE SUA PROFISSÃO ENCONTRA-SE NA LISTA ABAIXO
        SE FOR PROFISSÃO LIBERADA, PODE ENTRAR
        SE NÃO FOR PROFISSÃO LIBERADA, NÃO PODE ENTRAR

MENSAGEM: "FULANO DE TAL, VOCÊ ESTÁ LIBERADO PARA CIRCULAR PELA CIDADE"
*/


const prompt = require('prompt-sync') ();

   console.log("\n");
    console.log("^^^^^^^^^^^^^^^^^^^^^ Decreto Fácil ^^^^^^^^^^^^^^^^^^^^ \n");
var nome = prompt ("Digite o nome completo da pessoa ==> ");
    console.log("\n");
var morador = prompt ("É morador de Teresópolis? ==> ");
    console.log("\n");
var dataAtual = new Date();
var dia = dataAtual.getDate();

  if (morador == "sim") {;
    var cpf = prompt ("Digite o último número do seu CPF ==> ");  
    if (cpf % 2 === 0 && dia % 2 === 0) {;
       console.log("*** Hoje é dia", dia,"e o seu CPF termina em", cpf,"\n"
                  + " portanto", nome,",você pode entrar na cidade ***");
    } else if (cpf % 2 === 0 && dia %2 !== 0) {;
       console.log("*** Hoje é dia", dia, " e o seu CPF termina em", cpf,"\n"
                   + "portanto", nome,",você pode entrar mas não pode transitar pela cidade ***");
    } else if (cpf % 2 !== 0 && dia % 2 !== 0) {;
       console.log("*** Hoje é dia", dia, "e o seu CPF termina em", cpf, "\n"
                   + "portanto", nome,"você pode entrar na cidade ***");
    } else if (cpf % 2 !== 0 && dia % 2 === 0) {;
       console.log("*** Hoje é dia", dia, "e o seu CPF termina em", cpf, "\n"
                   + "portanto", nome,"você pode entrar mas não pode transitar pela cidade ***");
    }} 
  else { 
     console.log("1 - Área da Saúde" );
     console.log("2 - Área militar");
     console.log("3 - Área da educação");
     console.log("4 - Servidor público");
     console.log("5 - Nenhuma das opções acima");
     var profissão = prompt ("Digite um número das opções acima ==>");
     if (profissão == 5) {;
      console.log("Você não pode entrar na cidade");
     } else {console.log("***", nome," Você pode entrar na cidade ***");}}