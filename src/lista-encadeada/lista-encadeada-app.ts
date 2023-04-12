import { ListaEncadeada } from "./lista-encadeada";

export function executar() {
    let listaEncadeada = new ListaEncadeada();

    listaEncadeada.inserirPrimeiro(1);
    listaEncadeada.inserirPrimeiro(2);
    listaEncadeada.inserirPrimeiro(3);
    listaEncadeada.inserirPrimeiro(4);
    listaEncadeada.inserirPrimeiro(5);

    listaEncadeada.mostrarLista();

    while (!listaEncadeada.estaVazia()) {
        let link = listaEncadeada.removerPrimeiro();
        if (link === undefined) {
            return;
        }
        console.log("Removido link: ");
        link.mostrarLink();
    }

    listaEncadeada.mostrarLista();
}