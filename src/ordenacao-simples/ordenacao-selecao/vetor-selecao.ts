export class VetorSelecao {

    vetor: Array<number>;
    elementos: number;

    constructor(size: number) {
        this.vetor = new Array<number>(size)
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

    ordenacaoSelecao() {
        let frente, tras, minimo: number;
        for (tras = 0; tras < this.elementos; tras++) {
            minimo = tras;
            for (frente = (tras + 1); frente < this.elementos; frente++) {
                if (this.vetor[frente] < this.vetor[minimo]) {
                    minimo = frente;
                }
            }
            this.trocar(tras, minimo);
        }
    }

    trocar(indice: number, outroIndice: number) {
        let temporario = this.vetor[indice];
        this.vetor[indice] = this.vetor[outroIndice];
        this.vetor[outroIndice] = temporario;
    }

}