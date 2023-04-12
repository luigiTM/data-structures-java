import { executar as vetorExecutar } from "./vetor/vetor-app";
import { executar as vetorOrdenadoExecutar } from "./vetor-ordenado/vetor-ordenado-app";
import { executar as metodoBolhaExecutar } from "./ordenacao-simples/metodo-bolha/vetor-bolha-app";
import { executar as insercaoExecutar } from "./ordenacao-simples/ordenacao-insercao/vetor-insercao-app";
import { executar as selecaoExecutar } from "./ordenacao-simples/ordenacao-selecao/vetor-selecao-app";
import { executar as executarPilha } from "./pilha/pilha-app";
import { executar as executarFila } from "./fila/fila-app";
import { executar as executarListaEncadeada } from "./lista-encadeada/lista-encadeada-app";

vetorExecutar();
vetorOrdenadoExecutar();
metodoBolhaExecutar();
insercaoExecutar();
selecaoExecutar();
executarPilha();
executarFila();
executarListaEncadeada();