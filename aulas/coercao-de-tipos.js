//* > Coerção(Conversão) de tipos.

/*
  Coerção de tipos é a conversão automática ou implícita de valores de um tipo de dado para outro (ex: string para number).
*/

//* > Corerção explícita(Number, String, Boolean).

const numberAsString = Number('10'); // Armazena o valor 10 na variável numberAsString, convertendo o valor da string '10' para number.
console.log(numberAsString); // Retorna 10 no console.

const parsedNumber = parseInt('15.503232'); // Armazena o valor 15 na variável parsedNumber, convertendo o valor da string '10' para number.
console.log(parsedNumber); // Retorna 15 no console.

const floatNumber = parseFloat('1345.23'); // Armazena o valor 1345.23 na variável floatNumber, convertendo o valor da string '1345.23' para number.
console.log(floatNumber); // Retorna 1345.23 no console.

const stringAsNumber = String(10); // Armazena o valor '10' na variável stringAsNumber, convertendo o valor do number 10 para string.
console.log(stringAsNumber); // Retorna '10' no console.

const booleanAsString = Boolean(1); // Armazena o valor true na variável booleanAsString, convertendo o valor do number 1 para boolean e para false se o valor for 0.
console.log(booleanAsString); // Retorna true no console.

//* > Coerção implícita(+, -, *, /, %, **).

// O operador + é o único operador que concatena os valores da string '10' e do number 23 ao invés de realizar a conversão implícita dos valores da string '10' para number.
console.log('10' + 23); // Retorna 1023 no console pois o operador + concatena os valores da string '10' e do number 23.

// Diferente do operador +, os outros operadores realizam a conversão implícita dos valores da string '10' para number.
console.log('10' - 23); // Retorna -13 no console pois o operador - subtrai os valores da string '10' e do number 23.
console.log('10' * 23); // Retorna 230 no console pois o operador * multiplica os valores da string '10' e do number 23.
console.log('10' / 23); // Retorna 0.43478260869565216 no console pois o operador / divide os valores da string '10' e do number 23.
console.log('10' % 23); // Retorna 10 no console pois o operador % retorna o resto da divisão dos valores da string '10' e do number 23.
console.log('10' ** 23); // Retorna 1e+23 no console pois o operador ** retorna o valor da exponenciação dos valores da string '10' e do number 23.

//* > Outros exemplos.

// Qual será a saída desse código?
let n = '1' + 1; // Armazena a string '11' na variável n.
n = n - 1; // Armazena o valor 10 na variável n.
console.log(n); // Retorna o number 10 no console.

// Qual será a saída desse código?
console.log(2 + 3 + 4 + '5'); // Retorna a string '95' no console.

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4); // Retorna a string '5234' no console.

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5" ); // Retorna a string '15' no console.
