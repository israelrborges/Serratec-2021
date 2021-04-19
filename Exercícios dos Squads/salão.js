
const prompt=require("prompt-sync") ();
const CAPACIDADE_MAXIMA = 3
var lugares = 0
//Cabeçalho
console.log ('Cabeleireira Leila: cabelos, unhas, hidratação e unha. \n' 
    +'Cabeleireira Leila: venha fazer suas unhas, seus cabelos, \n' 
	+'e até mesmo hidratar suas madeixas de cabelo conosco. Tudo esterilizado para você não ficar mal');

    while (lugares < CAPACIDADE_MAXIMA) {
    console.log('Salão da Leila!Qual o nome do cliente?: \n')
    var nome = prompt('->');
     
    var resposta = prompt('Escolha o serviço desejado pelo cliente: '); 
  
  console.log('1 - Corte de Cabelo' );
  console.log('2 - Escova Simples');
  console.log('3 - Coloracao');
  console.log('4 - Unhas de Acrigel');
  console.log('5 - Maquiagem');
  
  
  if (resposta == 1)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 2)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 3)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 4)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 5)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  
lugares++;
}
console.log('Salao lotado! ');
var procedimento = prompt ('==>');