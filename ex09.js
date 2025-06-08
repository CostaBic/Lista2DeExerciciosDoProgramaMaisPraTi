/*
9. Conversão Entre Formatos
Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], … ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.
*/
const prompt = require('prompt-sync')(); // Importa a biblioteca para entrada de dados

// Função que converte um array de pares [ [chave, valor], ... ] em um objeto
function paresParaObjeto(pares) {
    // Cria um objeto vazio
    const obj = {};

    // Para cada par no array, adiciona ao objeto
    for (let i = 0; i < pares.length; i++) {
        const chave = pares[i][0]; // Primeiro elemento do par é a chave
        const valor = pares[i][1]; // Segundo elemento do par é o valor
        obj[chave] = valor;        // Atribui ao objeto
    }

    // Retorna o objeto final
    return obj;
}

// Função que converte um objeto em um array de pares [ [chave, valor], ... ]
function objetoParaPares(obj) {
    // Cria um array vazio para os pares
    const pares = [];

    // Percorre todas as chaves do objeto
    for (let chave in obj) {
        // Adiciona um par [chave, valor] ao array
        pares.push([chave, obj[chave]]);
    }

    // Retorna o array de pares
    return pares;
}

// ------------------
// Exemplo de uso para testar as funções
// ------------------

// Exemplo: Convertendo pares para objeto
const numPares = parseInt(prompt("Quantos pares deseja inserir? "));
const listaDePares = [];

for (let i = 0; i < numPares; i++) {
    const chave = prompt(`Chave do par ${i + 1}: `);
    const valor = prompt(`Valor da chave "${chave}": `);
    listaDePares.push([chave, valor]); // Adiciona o par ao array
}

// Converte os pares para objeto
const objeto = paresParaObjeto(listaDePares);
console.log("\nObjeto gerado a partir dos pares:");
console.log(objeto);

// Agora converte de volta para pares
const paresConvertidos = objetoParaPares(objeto);
console.log("\nPares gerados a partir do objeto:");
console.log(paresConvertidos);

