// Cálculo de tarifa de transporte:
//  Dependendo do tipo de transporte escolhido (1 = Ônibus, 2 = Metrô, 3 = Táxi), exiba o valor da tarifa correspondente.

const rl = require('readline-sync');

const opcoes = ['Onibus','Metro','Taxi'];
const valor = [5.50, 8.00, 15.00];

let user = rl.keyInSelect(opcoes,'Qual sera o seu transporte? ');

switch(user){
    case -1:
        console.log('Transporte cancelado');
        break;
    case user:
        console.log(`Você escolheu ${opcoes[user]}`);
        console.log(`O valor da sua passagem será ${valor[user]}`);
        break;
    }



