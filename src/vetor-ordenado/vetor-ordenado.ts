export class VetorOrdenado {

    vetor: Array<number>;
    elementos: number;

    constructor(size: number) {
        this.vetor = new Array<number>(size)
        this.elementos = 0;
    }

    inserir(valor: number) {
        let indice: number;
        for (indice = 0; indice < this.elementos; indice++) {
            if (this.vetor[indice] > valor) {
                break;
            }
        }
        for (let indiceParaDeslocar = this.elementos; indiceParaDeslocar > indice; indiceParaDeslocar--) {
            this.vetor[indiceParaDeslocar] = this.vetor[indiceParaDeslocar - 1]
        }
        this.vetor[indice] = valor;
        this.elementos++;
    }

    encontrar(valor: number): number {
        let limiteInferior = 0;
        let limiteSuperior = this.elementos - 1;
        let indice: number;
        while (true) {
            indice = Math.round((limiteInferior + limiteSuperior) / 2);
            if (this.vetor[indice] === valor) {
                return indice;
            } else if (limiteInferior > limiteSuperior) {
                return -1;
            } else {
                if (this.vetor[indice] < valor) {
                    limiteInferior = indice + 1;
                } else {
                    limiteSuperior = indice - 1;
                }
            }
        }
    }

    remover(valor: number): boolean {
        let indiceDoElemento = this.encontrar(valor);
        if (indiceDoElemento === -1) {
            return false;
        }
        for (let indice = indiceDoElemento; indice < this.elementos; indice++) {
            this.vetor[indice] = this.vetor[indice + 1];
        }
        this.elementos--;
        return true;
    }

    mostrar() {
        for (let indice = 0; indice < this.elementos; indice++) {
            console.log(this.vetor[indice]);
        }
    }

    tamanoh(): number {
        return this.elementos;
    }

}