import { Doacao } from "./Doacao";

export class DoacaoDinheiro extends Doacao {
  constructor(cpf: number, quantidade: number, tipo: number, cep: number) {
    super(cpf, quantidade, tipo);
  }
}
