Sistema de Gerenciamento de Doações
Este projeto implementa um sistema simples para gerenciar doações de diferentes tipos (dinheiro e comida), permitindo cadastro, listagem, atualização e exclusão de registros.
O código segue uma abordagem orientada a objetos em TypeScript, com separação de responsabilidades em diferentes classes e interfaces.
📂 Estrutura do Projeto
src/
├── model/
│   ├── Doacao.ts             # Classe abstrata base para doações
│   ├── DoacaoComida.ts       # Classe específica para doações de comida
│   ├── DoacaoDinheiro.ts     # Classe específica para doações em dinheiro
│
├── repository/
│   └── RepositorioDoacao.ts  # Interface que define operações no repositório de doações
│
├── service/
│   └── ControleDoacao.ts     # Implementação do repositório e lógica de negócio
│
├── utils/
│   └── Cores.ts              # Utilitário para estilizar mensagens no console
🛠 Tecnologias Utilizadas
TypeScript — Linguagem base do projeto
Programação Orientada a Objetos — Herança, polimorfismo e encapsulamento
Interface e Classes Abstratas — Definição de contratos e extensões

📌 Funcionalidades 
Cadastro de doações (dinheiro e comida)
Listagem de todas as doações
Atualização de doações existentes
Exclusão de doações
Identificação de tipo de doação
Formatação de saída no console (via Cores.ts)

🧩 Principais Classes e Interfaces
Doacao (abstract)
Classe base que representa uma doação genérica com:
CPF do doador
Quantidade
Tipo
DoacaoComida
Extende Doacao, adicionando:
CEP para entrega
Método doar() personalizado
DoacaoDinheiro
Extende Doacao, representando doações monetárias.
RepositorioDoacao
Interface que define os métodos obrigatórios para manipulação de doações:
listarTodas()
cadastrar()
atualizar()
deletar()
doar()
tipo()
ControleDoacao
Implementa RepositorioDoacao, gerencia um array de Doacao e executa as operações CRUD.
🚀 Como Executar
Clonar repositório
git clone <url-do-repositorio>
cd nome-do-projeto
Instalar dependências
npm install
Compilar e rodar
npx tsc
node dist/index.js
🖌 Exemplo de Uso
const controle = new ControleDoacao();

const doacao1 = new DoacaoDinheiro(12345678900, 500, 1, 0);
const doacao2 = new DoacaoComida(98765432100, 10, 2, 12345000);

controle.cadastrar(doacao1);
controle.cadastrar(doacao2);

controle.listarTodas();
📜 Licença
Este projeto está licenciado sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir.
