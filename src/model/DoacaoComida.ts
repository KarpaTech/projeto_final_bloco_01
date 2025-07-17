import { Doacao } from "./Doacao";

export class DoacaoComida extends Doacao {
  private _cep: number;

  constructor(cpf: number, quantidade: number, tipo: number, cep: number) {
    super(cpf, quantidade, tipo);
    this._cep = cep;
  }
  public get cep() {
    return this._cep;
  }
  public set cep(cep: number) {
    this._cep = cep;
  }

  public doar(valor: number): void {
    if (this.cpf == null) {
      console.log("\nDoação Inválida");
    }
    this.cpf = this.cpf
    console.log("Doação Válida");
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`CPF:${this.cpf.toFixed(11)}`);
  }
}
