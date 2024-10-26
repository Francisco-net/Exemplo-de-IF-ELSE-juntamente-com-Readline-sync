// Escolha de plano de telefonia: Um cliente deve escolher entre três planos de telefonia
//  (1 = Básico, 2 = Intermediário, 3 = Premium). O programa deve exibir as características do plano escolhido.


const rl = require('readline-sync');

const opcoes = ['Basico','Intermediario','Premium'];

basico={
  tipo: 'Básico',
  sobre: 'Este plano custa 25,50/mês e te da 2.4G de Dados Móveis'  
};
intermediario = {
    tipo: 'Intermediário',
    sobre: 'Este plano custa 45,90/mês e te da 4G de Dados Móveis juntamente com Whatsapp ilimitado'
};
premium = {
    tipo: 'Básico',
    sobre: 'Este plano custa 89,90/mês e te da 5G de Dados Móveis juntamente com redes sociais ilimitadas'
};

let user = rl.keyInSelect(opcoes,'Escolha seu plano telefonico:  ');

switch(user){
    case -1:
        console.log('Escolha cacelada');
        break;
    case 0:
        console.log(`Você escolheu ${opcoes[user]}`);
        console.log(`As cara caractéristicas deste plano são: ${premium.sobre}`);
        break;
    case 1:
        console.log(`Você escolheu ${opcoes[user]}`);
        console.log(`As cara caractéristicas deste plano são: ${intermediario.sobre}`);
        break;
    case 2:
        console.log(`Você escolheu ${opcoes[user]}`);
        console.log(`As cara caractéristicas deste plano são: ${basico.sobre}`);
        break;

};




