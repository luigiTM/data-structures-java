import { VetorSelecao } from "./vetor-selecao";

export function executar() {

    let vetorBolha = new VetorSelecao(100);

    vetorBolha.inserir(77);
    vetorBolha.inserir(99);
    vetorBolha.inserir(44);
    vetorBolha.inserir(55);
    vetorBolha.inserir(22);
    vetorBolha.inserir(88);
    vetorBolha.inserir(11);
    vetorBolha.inserir(0);
    vetorBolha.inserir(66);
    vetorBolha.inserir(33);

    vetorBolha.mostrar();

    vetorBolha.ordenacaoSelecao();

    vetorBolha.mostrar();

}