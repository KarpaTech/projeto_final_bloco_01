export abstract class Doacao {
  private _cpf: number;
  private _quantidade: number;
  private _tipo: number;

  constructor(cpf: number, quantidade: number, tipo: number) {
    this._cpf = cpf;
    this._quantidade = quantidade;
    this._tipo = tipo;
  }
  public get cpf(): number {
    return this._cpf;
  }
  public set cpf(value: number) {
    this._cpf = value;
  }
  public get quantidade_(): number {
    return this._quantidade;
  }
  public set quantidade_(value: number) {
    this._quantidade = value;
  }
  public get tipo(): number {
    return this._tipo;
  }
  public set tipo(value: number) {
    this._tipo = value;
  }

  public doar(valor: number): void {
    this._quantidade = this._quantidade + valor;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Doação Comida";
        break;
      case 2:
        tipo = "Doação Monetário";
        break;
    }

    console.log("\n\n†††††††††††††††††††††††");
    console.log("Dados da Conta:");
    console.log("†††††††††††††††††††††††");
    console.log("Numero do CPF: " + this._cpf);
    console.log("Tipo da Doação: " + tipo);
    console.log("Quantidade da Doação: " + this._quantidade);
  }
}
