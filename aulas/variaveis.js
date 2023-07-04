//* > Variável var.

/*
  O var é uma variável que pode ser alterada no decorrer do código, porém ela pode ser acessada de qualquer lugar do código.
*/

var city = 'São Paulo';  // Está armazenando o valor 'São Paulo' na variável city.
console.log(city);  // Imprime o valor da variável city no console.

city = 'Rio de Janeiro';  // Altera o valor da variável city para 'Rio de Janeiro'.
console.log(city);  // Imprime o valor da variável city no console.

//* > Variável let.

// O let é uma variável que pode ser alterada e acessada somente dentro do escopo que ela foi criada.

let age = 20;  // Está armazenando o valor 20 na variável age.
console.log(age);  // Imprime o valor da variável age no console.

age = 25.6;  // Altera o valor da variável age para 25.6.
console.log(age);  // Imprime o valor da variável age no console.

//* > Variável const.

/*
  O const é uma variável que não pode ser alterada e acessada somente dentro do escopo que ela foi criada.
*/

const study = true; // Está armazenando o valor true na variável study.
console.log(study);  // Imprime o valor da variável study no console.
// study = false;  // Mostra um erro no console, pois não é possível alterar o valor de uma constante.

//*> Tipos de dados.

let firstName = 'João';  // Está armazenando o valor do tipo string 'João' na variável firstName.
let dayToday = 30;  // Está armazenando o valor do tipo number 23 na variável dayToday.
let isTrue = true;  // Está armazenando o valor do tipo boolean true na variável isTrue.
let nothing = null;  // Está armazenando o valor do tipo null na variável nothing.
let notDefined;  // Está armazenando o valor do tipo undefined na variável notDefined.
let nullVariable = null;  // Está armazenando o valor do tipo null na variável nullVariable.

console.log(firstName, typeof firstName); // Imprime o valor da variável firstName e o tipo de dado que ela armazena.
console.log(dayToday, typeof dayToday); // Imprime o valor da variável dayToday e o tipo de dado que ela armazena.
console.log(isTrue, typeof isTrue); // Imprime o valor da variável isTrue e o tipo de dado que ela armazena.
console.log(nothing, typeof nothing); // Imprime o valor da variável nothing e o tipo de dado que ela armazena.
console.log(notDefined, typeof notDefined); // Imprime o valor da variável notDefined e o tipo de dado que ela armazena.
console.log(nullVariable, typeof nullVariable); // Imprime o valor da variável nullVariable e o tipo de dado que ela armazena.
