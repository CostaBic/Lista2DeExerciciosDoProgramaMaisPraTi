/*
4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.
*/

const prompt = require('prompt-sync')();

// Função fatorial recursiva
function fatorial(n) {
    if (n < 0) {
        console.log("ERROR!!  O fatorial não está definido para números negativos.");
        return null;
    }

    if (n === 0) {
        return 1;
    }

    return n * fatorial(n - 1);
}

// Entrada do usuário
const entrada = prompt("Digite um número inteiro que não seja negativo: ");
const numero = parseInt(entrada);

// Verifica se a entrada é um número válido. isNaN é uma função do JavaScript que verifica se um valor NÃO é um número.
if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
} else {
    const resultado = fatorial(numero);

    if (resultado !== null) {
        console.log("O fatorial de " + numero + " é " + resultado);
    }
}

