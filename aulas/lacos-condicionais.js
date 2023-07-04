//* > Laço condicional.

<<<<<<< HEAD:aulas/estruturas-de-repeticao.js
/*
  Uma estrutura de repetição é uma estrutura de controle que permite que um bloco de instruções seja executado repetidas vezes, dependendo de uma condição booleana.
*/

//* > Prompt-sync e Math.random().
=======
// O laço condicional é uma estrutura de repetição que permite que um bloco de instruções seja executado repetidas vezes, dependendo de uma condição booleana.
>>>>>>> 0ca62b02440068fa0382776b7b1d3e36b95ecd5b:aulas/lacos-condicionais.js

const input = require('prompt-sync')(); // Importação da biblioteca prompt-sync e armazenamento na constante input.

const drawnNumber = Math.floor(Math.random() * 10 + 1); // Gera um número aleatório entre 1 e 10 e arredonda para baixo com o Math.floor() e armazena o resultado na variável drawnNumber.
console.log(drawnNumber); // Exibe o número sorteado no console.

let numberUser = Number(input('Digite um número entre 1 e 10: ')); // Solicita ao usuário que digite um número entre 1 e 10, depois converte o valor para o tipo number e armazena o resultado na variável numberUser.

//* > While(condição).

// Enquanto numberUser for diferente de drawnNumber, executa o bloco de código abaixo do while.
while(numberUser !== drawnNumber) {
  console.log("Você errou! Tente novamente: "); // Exibe a mensagem no console.

  numberUser = Number(input('Digite um número entre 1 e 10: ')); // Solicita ao usuário que digite um número entre 1 e 10, depois converte o valor para o tipo number e armazena o resultado na variável numberUser.
}

console.log("Parábens, você acertou!"); // Exibe a mensagem no console após o usuário acertar o número.