import { Pilha } from './pilha'

export function executar() {

    let pilha = new Pilha(10);

    pilha.colocar(20);
    pilha.colocar(40);
    pilha.colocar(60);
    pilha.colocar(80);

    while (!pilha.estaVazia()) {
        console.log(pilha.retirar());
    }
}
