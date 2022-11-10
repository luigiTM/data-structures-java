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
        let index: number;
        for (index = 0; index < this.elementos; index++) {
            if (this.vetor[index] === valor) {
                break;
            }
        }
        if (index === this.elementos) {
            return false;
        }
        return true;
    }

    remover(valor: number): boolean {
        let index: number;
        for (index = 0; index < this.elementos; index++) {
            if (this.vetor[index] === valor) {
                break;
            }
        }
        if (index === this.elementos) {
            return false;
        }
        let indexParaDeslocar: number;
        for (indexParaDeslocar = index; indexParaDeslocar < this.elementos; indexParaDeslocar++) {
            this.vetor[indexParaDeslocar] = this.vetor[indexParaDeslocar + 1];
        }
        this.elementos--;
        return true;
    }

    mostrar() {
        for (let index = 0; index < this.elementos; index++) {
            console.log(this.vetor[index]);
        }
    }

    size() : number {
        return this.elementos;
    }

}