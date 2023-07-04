//* > Arrays.

/*
  Arrays são estruturas de dados que permitem armazenar vários valores em uma única variável, acessíveis por meio de um índice.
*/

//* > Como criar um array?

let array = ["Luiz", 20, 1.8, true]; // Cria um array com 4 elementos de tipos diferentes e o armazena na variável array.
console.log(array); // Imprime o array no console.

//* > Como acessar os elementos do array?

console.log("Primeiro elemento:", array[0]); // Imprime o primeiro indice elemento do array.
console.log("Segundo elemento:", array[1]); // Imprime o segundo indice elemento do array.
console.log("Terceiro elemento:", array[2]); // Imprime o terceiro indice elemento do array.
console.log("Quarto elemento:", array[3]); // Imprime o quarto indice elemento do array.

//* > Como obter o tamanho do array?

console.log("Tamanho do array:", array.length); // Imprime o tamanho do array.

//*> Percorrendo arrays.

// O for(contador; condição; incremento) cria um contador que começa do 0, depois verifica se o contador é menor que o tamanho do array, se for ele executa o bloco de código e incrementa o contador em 1 até que a condição seja falsa.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // Imprime cada elemento do array.
}

// O for of(elemento of array) faz uma iteração em cada elemento do array e armazena o elemento na variável elemento e executa o bloco de código para cada elemento.
for (let elemento of array) {
  console.log(elemento); // Imprime cada elemento do array.
}

// O for in(indice in array) faz uma iteração em cada indice do array e armazena o indice na variável indice e executa o bloco de código para cada indice.
for (let indice in array) {
  console.log(indice, array[indice]); /// Imprime o indice e o elemento do array.
}

console.clear(); // Limpa o console.

//*> Métodos de arrays.

const numbers = [30, 29, 12, 45, 34, 29]; // Cria um array com 5 elementos e o armazena na variável numbers.
const names = ["Carlos"]; // Cria um array com 1 elemento e o armazena na variável names.

// O método slice(inicio, fim) retorna um novo array com os elementos do array original que estão entre o indice inicio e o indice fim.
console.log(numbers.slice(1, 3)); // Imprime o array [12, 45].
console.log(numbers.slice(2)); // Imprime o array [45, 34, 29], pois o indice fim é opcional e se não for passado ele pega até o final do array.

// O método push(elemento) adiciona um elemento no final do array.
console.log("Antes do push:", names); // Imprime o array names vazio.
names.push("João"); // Adiciona o elemento "João" no final do array names.
console.log("Depois do push:", names); // Imprime o array names com o elemento "João".

// O método unshift(elemento) adiciona um elemento no inicio do array.
console.log("Antes do unshift:", names); // Imprime o array names com os elementos "Luiz" e "Felipe".
names.unshift("Maria"); // Adiciona o elemento "Maria" no inicio do array names.
console.log("Depois do unshift:", names); // Imprime o array names com os elementos "Maria", "Luiz" e "Felipe".

// O método pop() remove o último elemento do array.
console.log("Antes do pop:", names); // Imprime o array names com os elementos "Maria", "Luiz" e "Felipe".
names.pop(); // Remove o último elemento do array names.
console.log("Depois do pop:", names); // Imprime o array names com os elementos "Maria" e "Luiz".

// O método shift() remove o primeiro elemento do array.
console.log("Antes do shift:", names); // Imprime o array names com os elementos "Maria" e "Luiz".
names.shift(); // Remove o primeiro elemento do array names.
console.log("Depois do shift:", names); // Imprime o array names com o elemento "Luiz".

// O método concat(array) concatena o array original com o array passado como parâmetro.
console.log("Antes do concat:", names); // Imprime o array names com o elemento "Luiz".
console.log("Depois do concat:", names.concat(numbers)); // Imprime o array names com o elemento "Luiz" e o array numbers.

// O método indexOf(elemento) retorna o indice do elemento passado como parâmetro.
console.log("Indice do primeiro elemento 29:", numbers.indexOf(29)); // Imprime o primeiro indice do elemento 29.
console.log("Indice de um elemento inexistente:", numbers.indexOf(100)); // Imprime -1, pois o elemento não existe no array.

// O método lastIndexOf(elemento) retorna o ultimo indice do elemento passado como parâmetro.
console.log("Indice do último elemento 29:", numbers.lastIndexOf(29)); // Imprime o último indice do elemento 29.
console.log("Indice de um elemento inexistente:", numbers.lastIndexOf(100)); // Imprime -1, pois o elemento não existe no array.

// O método includes(elemento) retorna true se o elemento passado como parâmetro existe no array e false se não existe.
console.log("O elemento 29 existe no array numbers?", numbers.includes(29)); // Imprime true, pois o elemento existe no array.
console.log("O elemento 100 existe no array numbers?", numbers.includes(100)); // Imprime false, pois o elemento não existe no array.

// O método reverse() inverte a ordem dos elementos do array.
console.log("Antes do reverse:", numbers); // Imprime o array numbers com os elementos 30, 29, 12, 45, 34, 29.
numbers.reverse(); // Inverte a ordem dos elementos do array numbers.
console.log("Depois do reverse:", numbers); // Imprime o array numbers com os elementos 29, 34, 45, 12, 29, 30.
