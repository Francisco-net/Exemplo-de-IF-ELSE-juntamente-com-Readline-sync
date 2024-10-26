// Escolha do produto: Um supermercado oferece diferentes produtos (1 = Arroz, 2 = Feijão, 3 = Macarrão). 
// O programa deve perguntar ao usuário qual produto ele deseja comprar e exibir a escolha.

const rl = require('readline-sync');

const opcoes =  ['Arroz','Feijão','Macarrão'];

let user = rl.keyInSelect(opcoes, 'Qual o prudto que voce deseja comprar');

switch (user) {
    case -1:
        console.log('Compra cancelada');
        break;
    case user:
        console.log(`Voce escolher comprar ${opcoes[user]}`);
        break;

    default:
        break;
};


