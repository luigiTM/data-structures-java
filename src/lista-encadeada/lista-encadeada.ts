import { Link } from "./link";

export class ListaEncadeada {

    primeiro?: Link;

    constructor() {
        this.primeiro = undefined;
    }

    estaVazia(): boolean {
        return this.primeiro === undefined;
    }

    inserirPrimeiro(dado: number) {
        let novoLink = new Link(dado);
        novoLink.proximo = this.primeiro;
        this.primeiro = novoLink;
    }

    removerPrimeiro(): Link | undefined {
        if (this.primeiro === undefined) {
            return undefined;
        }
        let temporario = this.primeiro;
        this.primeiro = this.primeiro.proximo;
        return temporario;
    }

    mostrarLista() {
        console.log("Lista (primeiro -> último)");
        let atual = this.primeiro;
        while (atual !== undefined) {
            atual.mostrarLink();
            atual = atual.proximo;
        }
        console.log("\n");
    }

}