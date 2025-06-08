/*
6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.
*/
const prompt = require('prompt-sync')();

// Função de memoization
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            console.log('Retornando do cache...');
            return cache[key];
        } else {
            console.log('Calculando resultado...');
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Função lenta simulada (ex: soma com delay artificial)
function slowAdd(a, b) {
    // Simula operação demorada
    for (let i = 0; i < 1e8; i++) {}
    return a + b;
}

// Cria versão memorizada da função
const memoizedAdd = memoize(slowAdd);

// Loop de teste via terminal
while (true) {
    const a = parseInt(prompt('Digite o primeiro número (ou "q" para sair): '));
    if (isNaN(a)) break;

    const b = parseInt(prompt('Digite o segundo número: '));
    if (isNaN(b)) break;

    const result = memoizedAdd(a, b);
    console.log(`Resultado: ${result}\n`);
}

