//* >  Laço númerico.

/* 
  O laço númerico é uma estrutura de repetição que permite que um bloco de instruções seja executado repetidas vezes, dependendo de uma condição booleana.
*/

//* > O problema.

const input = require("prompt-sync")(); // Importação da biblioteca prompt-sync e armazenamento na constante input.

const nota1 = Number(input('Digite a 1° nota: ')); // Solicita ao usuário que digite a primeira nota e armazena o resultado em number na variável nota1.
const nota2 = Number(input('Digite a 2° nota: ')); // Solicita ao usuário que digite a segunda nota e armazena o resultado em number na variável nota2.
const nota3 = Number(input('Digite a 3° nota: ')); // Solicita ao usuário que digite a terceira nota e armazena o resultado em number na variável nota3.

const media = (nota1 + nota2 + nota3) / 3; // Calcula a média das notas e armazena o resultado na variável media.
console.log(`A média é ${media}`); // Exibe a média no console.

//* > Acumulador.

/*
  O acumulador é uma variável que acumula valores, geralmente é usado em laços de repetição.
*/

let acumulator = 0; // Inicializa a variável acumulator com o valor 0.
acumulator = acumulator + 10; // Atribui o valor 10 a variável acumulator.
acumulator += 20; // Atribui o valor 20 a variável acumulator, mesma coisa que acumulator = acumulator + 20.
acumulator++; // Atribui o valor 1 a variável acumulator, mesma coisa que acumulator = acumulator + 1.
console.log(acumulator); // Exibe o valor da variável acumulator no console.

//* > For(contador; condição; incremento/decremento).

/* 
  O for é uma estrutura de repetição que permite que um bloco de instruções seja executado repetidas vezes, dependendo de uma condição booleana.
*/

// O for(contador; condição; incremento) cria um contador que começa do 0, depois verifica se o contador é menor que 10, se for ele executa o bloco de instruções e depois incrementa o contador em 1.
for(let i = 0; i < 10; i++) {
  console.log(i); // Exibe o valor do contador no console.
}

// Resolvendo o problema inicial:

let nota; // Declara a variável nota responsável por armazenar as notas.
let sum = 0; // Declara a variável sum responsável por armazenar a soma das notas e inicializa com o valor 0.

// Dentro do for(contador; condição; incremento/decremento) foi criada uma variável i que recebe o valor 0, enquanto i for menor que 10, o bloco de instruções será executado e a cada execução o valor de i será incrementado em 1.
for (let i = 1; i <= 3; i++) {
  nota = Number(input(`Digite a ${i}° nota: `)); // Solicita ao usuário que digite a nota e armazena o resultado em number na variável nota.

  sum += nota; // Atribui a soma das notas a variável sum, mesma coisa que sum = sum + nota.
}

console.log(`A média do aluno é ${sum / 3}`); // Exibe a média das notas no console.
