import readlinesync = require ('readline-sync')
import { Cores } from '../util/Cores';
export function main() {

    let opcao: number;

    while (true) {

        console.log(Cores.bg.whitebright , Cores.fg.cyan, 
                    " ††††††††††††††††††††††††††††††††††††††††††††††††††");
        console.log("                                                     ");
        console.log("                   Doe & Perdoe                      ");
        console.log("                                                     ");
        console.log("  †††††††††††††††††††††††††††††††††††††††††††††††††† ");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar Contas                        ");
        console.log("            3 - Buscar Conta por Numero de CPF       ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Doação de Alimentos Não Pereciveis   ");
        console.log("            7 - Doação Monetária                     ");
        console.log("            8 - Feedback/Novas Ideas                 ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("  ††††††††††††††††††††††††††††††††††††††††††††††††††");
        console.log("                                                     ", 
        Cores.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(Cores.fg.greenstrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(Cores.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Cores.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", Cores.reset);
                
                keyPress()
                break;
            case 2:
                console.log(Cores.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", Cores.reset);

                keyPress()
                break;
            case 3:
                console.log(Cores.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", Cores.reset);

                keyPress()
                break;
            case 4:
                console.log(Cores.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", Cores.reset);

                keyPress()
                break;
            case 5:
                console.log(Cores.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", Cores.reset);

                keyPress()
                break;
            case 6:
                console.log(Cores.fg.whitestrong, 
                    "\n\nSaque\n\n", Cores.reset);

                keyPress()
                break;
            case 7:
                console.log(Cores.fg.whitestrong, 
                    "\n\nDepósito\n\n", Cores.reset);

                keyPress()
                break;
            case 8:
                console.log(Cores.fg.whitestrong, 
                    "\n\nFeedback/Novas Ideias\n\n", Cores.reset);

                keyPress()
                break;
            default:
                console.log(Cores.fg.whitestrong, 
                    "\nOpção Inválida!\n", Cores.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(Cores.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();