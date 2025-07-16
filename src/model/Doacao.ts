import { Colors } from "../../util/Cores";
import { ContaPoupanca } from "./DoacaoDin";

export abstract class Conta {
  static cadastrar(cp1: ContaPoupanca) {
    throw new Error("Method not implemented.");
  }
  static gerarNumero(): number {
    throw new Error("Method not implemented.");
  }
  private _cpf: number;
  private _cep: number;
  private _tipo: number;
  private _saldo: number;

  constructor(
    cpf: number,
    cep: number,
    tipo: number,
    saldo: number
  ) {
    this._cpf = cpf;
    this._cep = cep;
    this._tipo = tipo;
    this._saldo = saldo;
  }

  public get numero() {
    return this._cpf;
  }

  public set numero(numero: number) {
    this._cpf = numero;
  }

  public get cep() {
    return this._cep;
  }

  public set cep(cep: number) {
    this._cep = cep;
  }

  public get tipo() {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public get titular() {
    return this.;
  }

  public get saldo() {
    return this._saldo;
  }

  public set saldo(saldo: number) {
    this._saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\n Saldo Insuficiente!");
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Doação de Alimento";
        break;
      case 2:
        tipo = "Doaçao em Dinheiro";
        break;
    }

    console.log(
      Colors.fg.whitestrong,
      "\n\n*****************************************************",
      Colors.reset
    );
    console.log(Colors.fg.bluestrong, "Dados da Conta:"), Colors.reset;
    console.log("*****************************************************");
    console.log(
      Colors.fg.bluestrong,
      "Numero da Conta: " + this._cpf,
      Colors.reset
    );
    console.log(
      Colors.fg.bluestrong,
      "Agência: " + this._cep,
      Colors.reset
    );
    console.log(Colors.fg.bluestrong, "Tipo da Conta: " + tipo, Colors.reset);
    console.log(
      Colors.fg.bluestrong,
      "Titular: " + this.,
      Colors.reset
    );
    console.log(
      Colors.fg.bluestrong,
      "Saldo: " + this._saldo.toFixed(2),
      Colors.reset
    );
  }
}
