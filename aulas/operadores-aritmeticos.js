//* > Operadores aritméticos.

/*
  Os operadores aritméticos são utilizados para realizar operações matemáticas.
*/

let number1 = 20; // Está armazenando o valor 20 na variável number1.
let number2 = 2; // Está armazenando o valor 10 na variável number2.

// Adição: +
console.log("Soma =", number1 + number2); // Imprime a soma das variáveis number1 e number2 no console.

// Subtração: -
console.log("Subtração =", number1 - number2); // Imprime a subtração das variáveis number1 e number2 no console.

// Multiplicação: *
console.log("Multiplicação =", number1 * number2); // Imprime a multiplicação das variáveis number1 e number2 no console.

// Divisão: /
console.log("Divisão =", number1 / number2); // Imprime a divisão das variáveis number1 e number2 no console.

// Exponenciação: **
console.log("Exponenciação =", number1 ** number2); // Imprime a exponenciação das variáveis number1 e number2 no console.

// Módulo ou Resto da divisão: %
console.log("Módulo =", number1 % number2); // Imprime o módulo das variáveis number1 e number2 no console.

//* > Precedência de operadores aritméticos.

/* 
  Na matemática, a multiplicação e a divisão tem precedência sobre a adição e a subtração, porém no JavaScript a precedência é a mesma, então é necessário utilizar os parênteses para definir a precedência.
*/

console.log(3 + 2 * 5); // Imprime o resultado da operação 2 * 5 e depois soma com 3.
console.log((3 + 2) * 5); // Imprime o resultado da operação 3 + 2 e depois multiplica por 5.

//* > Biblioteca Math.

/* 
  A biblioteca Math possui funções matemáticas que podem ser utilizadas no JavaScript.
*/

console.log(Math.PI); // Imprime o valor de PI no console.
console.log(Math.sqrt(16)); // Imprime a raiz quadrada de 16 no console.