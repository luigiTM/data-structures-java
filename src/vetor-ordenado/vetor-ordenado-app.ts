import { VetorOrdenado } from "./vetor-ordenado";

export function executar() {

    let vetorOrdenado = new VetorOrdenado(100);

    vetorOrdenado.inserir(77);
    vetorOrdenado.inserir(99);
    vetorOrdenado.inserir(44);
    vetorOrdenado.inserir(55);
    vetorOrdenado.inserir(22);
    vetorOrdenado.inserir(88);
    vetorOrdenado.inserir(11);
    vetorOrdenado.inserir(0);
    vetorOrdenado.inserir(66);
    vetorOrdenado.inserir(33);

    vetorOrdenado.mostrar();

    if (vetorOrdenado.encontrar(44) !== -1) {
        console.log("Encontrei")
    } else {
        console.log("Não encontrei")
    }

    vetorOrdenado.remover(0)
    vetorOrdenado.remover(55)
    vetorOrdenado.remover(99)

    vetorOrdenado.mostrar();

}