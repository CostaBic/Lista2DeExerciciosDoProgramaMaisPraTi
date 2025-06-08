/*
3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/




// Frase de entrada
const fraseEntrada = "olá olá mundo mundo";

/*
Quebra a frase em palavras usando o espaço como separador. Aqui as palavras já estão em um array separadas mas precisamos verificar quais estão repetidas para exibir apenas palavras únicas.
*/
const palavrasSeparadas = fraseEntrada.split(" ");

// Array onde serão armazenadas as palavras únicas
const PalavrasUnicas = [];

// Percorre todas as palavras da frase
for (let i = 0; i < palavrasSeparadas.length; i++) {
    let palavraAtual = palavrasSeparadas[i];
    let nova = false;

    // Verifica se a palavra atual já está no array de palavras únicas
    for (let j = 0; j < PalavrasUnicas.length; j++) {
        if (palavraAtual === PalavrasUnicas[j]) {
            nova = true;
            break; // Já existe, então não adiciona
        }
    }

    // Se a palavra ainda não foi encontrada, adiciona ao array de únicas
    if (!nova) {
        PalavrasUnicas.push(palavraAtual);
    }
}

// Exibe o resultado
console.log("Palavras únicas em um array:", PalavrasUnicas);
