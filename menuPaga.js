// Menu de pagamento: Um sistema de pagamento oferece as seguintes opções:
//  1 para cartão de crédito, 2 para débito, e 3 para boleto. O programa deve mostrar a mensagem de confirmação correspondente.



const rl = require('readline-sync');

const opcoes =  ['Crédito','Débito','Boleto'];

let user = rl.keyInSelect(opcoes, 'Qual o será sua forma de pagamento: ');

switch (user) {
    case -1:
        console.log('pagamento cancelado');
        break;
    case user:
        console.log(`Voce escolheu ${opcoes[user]}`);
        break;

    default:
        break;
};






