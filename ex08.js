/*
8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.
*/


// Importa a biblioteca prompt-sync para ler entradas do usuário via terminal
const prompt = require('prompt-sync')();

// Cria um array vazio para armazenar os objetos de vendas
let vendas = [];

// Pergunta ao usuário quantas vendas serão cadastradas e converte a entrada para número inteiro
const numVendas = parseInt(prompt("Quantas vendas deseja cadastrar? "));

// Laço para coletar os dados de cada venda
for (let i = 0; i < numVendas; i++) {
    // Pede o nome do cliente
    const cliente = prompt(`Nome do cliente [${i + 1}]: `);
    
    // Pede o valor total da venda e converte para número decimal
    const total = parseFloat(prompt(`Total da venda para ${cliente}: `));
    
    // Adiciona o objeto { cliente, total } ao array de vendas
    vendas.push({ cliente, total });
}

// Usa reduce para criar um objeto onde a chave é o nome do cliente
// e o valor é a soma total das vendas desse cliente
const totalPorCliente = vendas.reduce((acumulador, venda) => {
    // Se o cliente já existe no acumulador, soma o total da venda atual
    if (acumulador[venda.cliente]) {
        acumulador[venda.cliente] += venda.total;
    } else {
        // Se o cliente ainda não existe, cria a chave e define o total inicial
        acumulador[venda.cliente] = venda.total;
    }

    // Retorna o acumulador atualizado para a próxima iteração
    return acumulador;
}, {}); // {} é o valor inicial do acumulador (um objeto vazio)

// Exibe o resultado final com os totais de vendas por cliente
console.log("\nTotal de vendas por cliente:");

// Percorre o objeto final para mostrar cada cliente e seu total
for (const cliente in totalPorCliente) {
    // Imprime o nome do cliente e o total, formatado com duas casas decimais
    console.log(`${cliente}: R$ ${totalPorCliente[cliente].toFixed(2)}`);
}
