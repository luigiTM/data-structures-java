export class Pilha {

    tamanhoMaximo: number;
    vetor: Array<number>;
    topo: number;

    constructor(tamanhoMaximo: number) {
        this.tamanhoMaximo = tamanhoMaximo;
        this.vetor = new Array<number>(tamanhoMaximo);
        this.topo = -1;
    }

    colocar(valor: number) {
        this.vetor[++this.topo] = valor;
    }

    retirar(): number {
        return this.vetor[this.topo--];
    }

    espiar(): number {
        return this.vetor[this.topo];
    }

    estaVazia(): boolean {
        return this.topo === -1;
    }

    estaCheia(): boolean {
        return (this.topo === (this.tamanhoMaximo - 1));
    }

}