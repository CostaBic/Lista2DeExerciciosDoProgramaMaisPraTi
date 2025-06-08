/*
5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.
*/

// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Função debounce
function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Função que será chamada com debounce
function mostrarMensagem(msg) {
    console.log("Função executada: " + msg);
}

// Cria uma versão com debounce
const mensagemDebounce = debounce(mostrarMensagem, 2000); // 2 segundos

console.log("Digite mensagens rapidamente para testar o debounce.");
console.log("A função só será executada se você parar de digitar por 2 segundos.\n");

// Simula várias chamadas com prompt (interativo)
while (true) {
    const entrada = prompt("Mensagem (ou 'sair' para encerrar): ");
    if (entrada.toLowerCase() === 'sair') {
        console.log("Encerrando programa...");
        break;
    }

    // Chama a função com debounce
    mensagemDebounce(entrada);
}

/*
Basicamente o debounce segura a execussão de uma função por um tempo determinado.
*/