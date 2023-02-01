import { Fila } from './fila'

export function executar() {

    let fila = new Fila(10);

    fila.inserir(10);
    fila.inserir(20);
    fila.inserir(30);
    fila.inserir(40);

    fila.remover();
    fila.remover();
    fila.remover();

    fila.inserir(50);
    fila.inserir(60);
    fila.inserir(70);
    fila.inserir(80);

    while (!fila.estaVazia()) {
        console.log(fila.remover());
    }
}
