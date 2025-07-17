import { Doacao } from "../model/Doacao";

export interface RepositorioDoacao {
	NumCpf(numero: number): void;
	listarTodas(): void;
	cadastrar(Doacao:Doacao): void;
	atualizar(Doacao:Doacao): void;
	deletar(numero: number): void;
	
	doar(valor: number): void;
	tipo(numero: number): void;
}
