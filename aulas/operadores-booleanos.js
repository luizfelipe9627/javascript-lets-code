//* > Operadores booleanos.

/*
  Operadores booleanos são operadores que retornam valores booleanos (true ou false).
*/

const number = 10; // Armazena o valor 10 na variável number.

// Igualidade: ==
console.log(number == 10); // Retorna true no console, pois o valor da variável number é igual a 10.

// Igualdade estrita: ===
console.log(number === "10"); // Retorna false no console, pois o valor da variável number não é igual a '10' mas sim a 10.

// Desigualdade: !=
console.log(number != 10); // Retorna false no console, pois o valor da variável number não é diferente de 10.

// Desigualdade estrita: !==
console.log(number !== "10"); // Retorna true no console, pois o valor da variável number é diferente de '10'.

// Maior que: >
console.log(number > 20); // Retorna false no console, pois o valor da variável number é menor que 20.

// Maior ou igual que: >=
console.log(number >= 12); // Retorna false no console, pois o valor da variável number é menor que 12.

// Menor que: <
console.log(number < 20); // Retorna true no console, pois o valor da variável number é menor que 20.

// Menor ou igual que: <=
console.log(number <= 17); // Retorna true no console, pois o valor da variável number é menor que 17.

//* > Conjunções lógicas.

/*
  Conjunções lógicas são operadores que retornam valores booleanos (true ou false) e são utilizados para combinar valores booleanos.  
*/

let age = 20; // Armazena o valor 20 na variável age.
let haveCNH = true; // Armazena o valor true na variável haveCNH.

// AND: &&
const canDrive = age >= 18 && haveCNH === true; // Armazena o valor true na variável canDrive, pois a variável age é maior ou igual a 18 e a variável haveCNH é estritamente igual a true.
console.log("Posso dirigir?", canDrive); // Retorna true no console, pois a variável canDrive é igual a true.

// OR: ||
const canVote = age < 18 || age >= 70; // Armazena o valor false na variável canVote, pois a variável age não é menor que 18 e nem maior ou igual a 70.
console.log("Eu devo votar?", canVote); // Retorna false no console, pois a variável canVote é igual a false.

// NOT: !
const studying = false; // Armazena o valor false na variável studying.
console.log("Eu estou estudando?", !studying); // Retorna true no console, pois a variável studying é igual a false.
