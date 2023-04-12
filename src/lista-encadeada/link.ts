export class Link {

    dado: number;
    proximo: Link | undefined;

    constructor(dado: number){
        this.dado = dado;
        this.proximo = undefined;
    }

    mostrarLink(){
        console.log(`Dado: ${this.dado}`);
    }
}