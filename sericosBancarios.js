// Menu de serviços bancários: Um banco oferece as seguintes operações: 
// 1 = Consulta saldo, 2 = Depósito, 3 = Saque. O programa deve executar a operação correspondente.


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


