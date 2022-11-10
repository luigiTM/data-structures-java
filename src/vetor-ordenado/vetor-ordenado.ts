export class VetorOrdenado {

    vetor: Array<number>;
    elementos: number;

    constructor(size: number) {
        this.vetor = new Array<number>(size)
        this.elementos = 0;
    }

    inserir(valor: number) {
        let index: number;
        for (index = 0; index < this.elementos; index++) {
            if (this.vetor[index] > valor) {
                break;
            }
        }
        for (let indexToMove = this.elementos; indexToMove > index; indexToMove--) {
            this.vetor[indexToMove] = this.vetor[indexToMove - 1]
        }
        this.vetor[index] = valor;
        this.elementos++;
    }

    encontrar(valor: number): number {
        let limiteInferior = 0;
        let limiteSuperior = this.elementos - 1;
        let index: number;
        while (true) {
            index = Math.round((limiteInferior + limiteSuperior) / 2);
            if (this.vetor[index] === valor) {
                return index;
            } else if (limiteInferior > limiteSuperior) {
                return -1;
            } else {
                if (this.vetor[index] < valor) {
                    limiteInferior = index + 1;
                } else {
                    limiteSuperior = index - 1;
                }
            }
        }
    }

    remover(valor: number): boolean {
        let indexDoElemento = this.encontrar(valor);
        if (indexDoElemento === -1) {
            return false;
        }
        for (let index = indexDoElemento; index < this.elementos; index++) {
            this.vetor[index] = this.vetor[index + 1];
        }
        this.elementos--;
        return true;
    }

    mostrar() {
        for (let index = 0; index < this.elementos; index++) {
            console.log(this.vetor[index]);
        }
    }

    tamanoh(): number {
        return this.elementos;
    }

}