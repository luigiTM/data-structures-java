export class Vetor {

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

    encontrar(valor: number): boolean {
        let indice: number;
        for (indice = 0; indice < this.elementos; indice++) {
            if (this.vetor[indice] === valor) {
                break;
            }
        }
        if (indice === this.elementos) {
            return false;
        }
        return true;
    }

    remover(valor: number): boolean {
        let indice: number;
        for (indice = 0; indice < this.elementos; indice++) {
            if (this.vetor[indice] === valor) {
                break;
            }
        }
        if (indice === this.elementos) {
            return false;
        }
        let indiceParaDeslocar: number;
        for (indiceParaDeslocar = indice; indiceParaDeslocar < this.elementos; indiceParaDeslocar++) {
            this.vetor[indiceParaDeslocar] = this.vetor[indiceParaDeslocar + 1];
        }
        this.elementos--;
        return true;
    }

    mostrar() {
        for (let indice = 0; indice < this.elementos; indice++) {
            console.log(this.vetor[indice]);
        }
    }

    size() : number {
        return this.elementos;
    }

}