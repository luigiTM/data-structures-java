export class VetorBolha {

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

    ordenacaoBolha() {
        let frente, tras: number;
        for (tras = this.elementos - 1; tras > 1; tras--) {
            for (frente = 0; frente < tras; frente++) {
                if (this.vetor[frente] > this.vetor[frente + 1]) {
                    this.trocar(frente, frente + 1);
                }
            }
        }
    }

    trocar(indice: number, outroIndice: number) {
        let temporario = this.vetor[indice];
        this.vetor[indice] = this.vetor[outroIndice];
        this.vetor[outroIndice] = temporario;
    }

}