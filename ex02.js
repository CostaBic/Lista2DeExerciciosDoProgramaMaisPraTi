/*
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

const prompt = require('prompt-sync')();

// Gera número aleatório de 1 a 100
const numero = Math.floor(Math.random() * 100) + 1;

let tentativaN = 0;
let acertou = false;

while (!acertou) {
    const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
    tentativaN++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Digite um número válido entre 1 e 100.");
        continue;
    }

    if (palpite === numero) {
        console.log(`Parabéns! Você acertou em ${tentativaN} tentativa(s).`);
        acertou = true;
    } else if (palpite < numero) {
        console.log("Mais alto!");
    } else {
        console.log("Mais baixo!");
    }
}


