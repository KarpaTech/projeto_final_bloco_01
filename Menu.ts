 import readlinesync = require ('readline-sync');
import { Cores } from './src/util/Cores';
import { Doacao } from './src/model/Doacao';
import { DoacaoComida } from './src/model/DoacaoComida';
import { DoacaoDinheiro } from './src/model/DoacaoDinheiro';
import { ControleDoacao } from './src/controller/ControleDoacao';

export function main() {
let doacoes: ControleDoacao = new ControleDoacao();

let opcao: number;
let conta: string;
const contas = ['Conta PF', 'Conta PJ']
const doacomida: DoacaoComida = new DoacaoComida(11, 33, 1, 8);
    doacomida.visualizar();
    doacomida.doar(33);
    doacomida.tipo
    const doadinheiro: DoacaoDinheiro = new DoacaoDinheiro(11, 33, 2, 8);
    doadinheiro.visualizar();
    doadinheiro.doar(33);

    while (true) {

        
        console.log(Cores.bg.whitebright, Cores.fg.cyan,             " ††††††††††††††††††††††††††††††††††††††† ",Cores.reset);
        console.log(Cores.bg.whitebright,"                                          ",Cores.reset);
        console.log(Cores.bg.whitebright,"                 Doe & Perdoe.            ",Cores.reset);
        console.log(Cores.bg.whitebright,"                                          ",Cores.reset);
        console.log(Cores.bg.whitebright,Cores.fg.cyan," ††††††††††††††††††††††††††††††††††††††† ",Cores.reset);
        console.log(Cores.bg.whitebright,"                                          ",Cores.reset);
        console.log(Cores.bg.whitebright," 1 - Criar Conta                          ",Cores.reset);
        console.log(Cores.bg.whitebright," 2 - Listar Contas                        ",Cores.reset);
        console.log(Cores.bg.whitebright," 3 - Buscar Conta por Numero de CPF       ",Cores.reset);
        console.log(Cores.bg.whitebright," 4 - Atualizar Dados da Conta             ",Cores.reset);
        console.log(Cores.bg.whitebright," 5 - Apagar Conta                         ",Cores.reset);
        console.log(Cores.bg.whitebright," 6 - Doação de Alimentos Não Pereciveis   ",Cores.reset);
        console.log(Cores.bg.whitebright," 7 - Doação Monetária                     ",Cores.reset);
        console.log(Cores.bg.whitebright," 8 - Feedback/Novas Ideas                 ",Cores.reset);
        console.log(Cores.bg.whitebright," 9 - Sair                                 ",Cores.reset);
        console.log(Cores.bg.whitebright,"                                          ",Cores.reset);
        console.log(Cores.bg.whitebright,Cores.fg.cyan," ††††††††††††††††††††††††††††††††††††††† ",Cores.reset);
        console.log(Cores.bg.whitebright,"                                          ",Cores.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(Cores.fg.cyan, 
                "\nAgradecemos o contato.\nVolte sempre!",Cores.reset);
            sobre();
            console.log(Cores.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Cores.fg.whitestrong,"\n\nCriar Conta\n\n", Cores.reset);
                
                console.log('Diga o tipo da conta:')
                conta = readlinesync.question('')

                
                keyPress()
                break;
            case 2:
                console.log(Cores.fg.whitestrong,"\n\nListar todas as Contas\n\n", Cores.reset);

                doacoes.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(Cores.fg.whitestrong,"\n\nBuscar Conta por Numero de CPF\n\n", Cores.reset);

                keyPress()
                break;
            case 4:
                console.log(Cores.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", Cores.reset);

                keyPress()
                break;
            case 5:
                console.log(Cores.fg.whitestrong,"\n\nApagar uma Conta\n\n", Cores.reset);

                keyPress()
                break;
            case 6:
                console.log(Cores.fg.whitestrong,"\n\nDoação de Alimentos Não Pereciveis\n\n", Cores.reset);

                keyPress()
                break;
            case 7:
                console.log(Cores.fg.whitestrong,"\n\nDoação Monetária\n\n", Cores.reset);

                keyPress()
                break;
            case 8:
                console.log(Cores.fg.whitestrong,"\n\nFeedback/Novas Ideias\n\n", Cores.reset);

                keyPress()
                break;
            default:
                console.log(Cores.fg.whitestrong,"\nOpção Inválida!\n", Cores.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("email: karpatech2025@gmail.com\nlinkedin: https://www.linkedin.com/in/pedro-henrique-0986941b7/");
    console.log("https://github.com/KarpaTech");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(Cores.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();