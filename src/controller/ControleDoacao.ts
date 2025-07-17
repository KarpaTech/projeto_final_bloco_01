import { Doacao } from "../model/Doacao";
import { RepositorioDoacao } from "../repository/RepositorioDoacao";

export class ControleDoacao implements RepositorioDoacao {
  private listaDoacoes: Array<Doacao> = new Array<Doacao>();
  number: number = 0;

  NumCpf(numero: number): void {
    throw new Error("Method not implemented.");
  }

  listarTodas(): void {
    for (let doacao of this.listaDoacoes) {
      doacao.visualizar();
    }
  }

  cadastrar(doacao: Doacao): void {
    this.listaDoacoes.push(doacao);
    console.log(`\nCPF:${this.NumCpf} foi criada com sucesso!`);
  }

  atualizar(Doacao: Doacao): void {
    throw new Error("Method not implemented.");
  }

  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }

  doar(valor: number): void {
    throw new Error("Method not implemented.");
  }

  tipo(numero: number): void {
    throw new Error("Method not implemented.");
  }
  public gerarNumCpf(): number {
    return ++this.number;
  }
}
