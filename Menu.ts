import { Cores } from './util/Cores';

const leia = require('readline-sync');

let quantidade:number
let valor:number
let resposta:string
let palavra:string
let questao:string

// 1. Pergunta quantidade de alimentos
quantidade = leia.questionInt("\nQuantos alimentos deseja doar: ");
console.log(Cores.fg.yellowstrong, `${quantidade}`, Cores.reset);

resposta = leia.question("\nO alimento é perecível? ");
console.log(Cores.fg.yellowstrong, `${resposta}`, Cores.reset);

questao = leia.question('\nDeseja realizar a doação? (sim/nao) ');
if (questao.toLowerCase() === 'sim') {
    valor = leia.questionFloat('\nQual o valor da doação?\nR$');
    console.log(Cores.fg.yellowstrong, `\nR$${valor.toFixed(2)}`, Cores.reset);
} else {
    console.log('Tudo bem!');
}
palavra = leia.question("\nO que deseja dizer?\n ");
console.log(Cores.fg.yellowstrong, `\n${palavra}`, Cores.reset);

console.log()