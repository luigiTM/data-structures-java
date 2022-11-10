import { Vetor } from "./vetor";

export function executar() {

    let vetor = new Vetor(15);

    vetor.inserir(1);
    vetor.inserir(2);
    vetor.inserir(3);
    vetor.inserir(4);
    vetor.inserir(5);
    vetor.inserir(6);
    vetor.inserir(7);
    vetor.inserir(8);
    vetor.inserir(9);
    vetor.inserir(10);

    vetor.mostrar();

    if (vetor.encontrar(5)) {
        console.log("Encontrei")
    } else {
        console.log("Não encontrei")
    }

    vetor.remover(1)
    vetor.remover(6)
    vetor.remover(10)

    vetor.mostrar();

}