/*
7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, …], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
*/

// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Função para ordenar e mapear os nomes dos produtos
function ordenarProdutosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco) // Ordena por preço crescente
        .map(produto => produto.nome);     // Retorna apenas os nomes
}

// Entrada do usuário
let produtos = [];
let quantidade = parseInt(prompt("Quantos produtos deseja cadastrar? "));

// Coleta os dados de cada produto
for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Nome do produto ${i + 1}: `);
    let preco = parseFloat(prompt(`Preço do produto ${i + 1}: `));
    produtos.push({ nome, preco });
}

// Executa a função
const nomesOrdenados = ordenarProdutosPorPreco(produtos);

// Exibe o resultado
console.log("\nNomes ordenados por preço crescente:");
console.log(nomesOrdenados);


/*
Outrs solução: 

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() // Faz uma cópia para não alterar o array original
        .sort((a, b) => a.preco - b.preco) // Ordena por preço crescente
        .map(produto => produto.nome) // Retorna apenas os nomes
}
*/