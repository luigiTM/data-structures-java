import { VetorInsercao } from "./vetor-insercao";

export function executar() {

    let vetorInsercao = new VetorInsercao(100);

    vetorInsercao.inserir(77);
    vetorInsercao.inserir(99);
    vetorInsercao.inserir(44);
    vetorInsercao.inserir(55);
    vetorInsercao.inserir(22);
    vetorInsercao.inserir(88);
    vetorInsercao.inserir(11);
    vetorInsercao.inserir(0);
    vetorInsercao.inserir(66);
    vetorInsercao.inserir(33);

    vetorInsercao.mostrar();

    vetorInsercao.ordenacaoInsercao();

    vetorInsercao.mostrar();

}