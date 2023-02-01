export class Fila {

    tamanhoMaximo: number;
    vetor: Array<number>;
    inicio: number;
    fim: number;
    numeroElementos: number;

    constructor(tamanho: number) {
        this.tamanhoMaximo = tamanho;
        this.vetor = new Array<number>(tamanho);
        this.inicio = 0;
        this.fim = -1;
        this.numeroElementos = 0;
    }

    inserir(valor: number) {
        if (this.fim === this.tamanhoMaximo - 1) {
            this.fim = -1;
        }
        this.vetor[++this.fim] = valor;
        this.numeroElementos++;
    }

    remover(): number {
        let temp = this.vetor[this.inicio++];
        if (this.inicio === this.tamanhoMaximo) {
            this.inicio = 0;
        }
        this.numeroElementos--;
        return temp;
    }

    espiarInicio(): number {
        return this.vetor[this.inicio]
    }

    estaVazia(): boolean {
        return this.numeroElementos === 0;
    }

    estaCheia(): boolean {
        return this.numeroElementos === this.tamanhoMaximo;
    }

    tamanho(): number {
        return this.numeroElementos;
    }
}