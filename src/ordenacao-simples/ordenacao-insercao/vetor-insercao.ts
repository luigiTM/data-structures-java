export class VetorInsercao {

    vetor: Array<number>;
    elementos: number;

    constructor(tamanho: number) {
        this.vetor = new Array<number>(tamanho)
        this.elementos = 0;
    }

    inserir(valor: number) {
        this.vetor[this.elementos] = valor;
        this.elementos++;
    }

    mostrar() {
        for (let indice = 0; indice < this.elementos; indice++) {
            console.log(this.vetor[indice]);
        }
        console.log("\n")
    }

    ordenacaoInsercao() {
        let entra, sai: number;
        for (sai = 1; sai < this.elementos; sai++) {
            let temp = this.vetor[sai];
            entra = sai;
            while (entra > 0 && this.vetor[entra - 1] >= temp) {
                this.vetor[entra] = this.vetor[entra - 1];
                --entra;
            }
            this.vetor[entra] = temp;
        }
    }
}