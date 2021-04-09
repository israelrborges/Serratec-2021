 /* Lanchonete
Zepa foi até a lanchonete para comprar um lanche, pois estava com fome. 
Lá ele encontrou disponível pra venda Paçoca, coxinha, açaí e café.
Zepa tinha em sua carteira 32,00.
E os itens na lanchonete tinham os seguintes preços: 
Paçoca: 18,00
Coxinha: 7,00
Açaí: 5,00
Café: 3,50

Perguntar ao Zepa qual alimento ele deseja comprar
Verificar se ele tem dinheiro para comprar, se sim, compra realizada. 
Se não tiver dinheiro suficiente, retornar que a compra não pode ser feita.
*/

const input = require("prompt-sync")();

const pacoca = 40.00
const coxinha = 19.00
const acai = 20.00
const cafe = 3.5

var carteira = 32.00

//Entrada

const disponiveis = ['Pacoca', 'Cafe', 'Acai', 'Coxinha'];
console.log('Olá! Qual alimento você deseja comprar? \n' 
    + 'Temos disponíveis: Pacoca, Cafe, Acai e Coxinha \n');
const desejo = input('Seu pedido é: ');

var itemExiste = 0;
for (var i = 0; i < disponiveis.length; i++) {
    if (disponiveis[i] === desejo) {
        itemExiste = 1;
        break;
    }
}