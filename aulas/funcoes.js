//* > Funções.

/*
  Função é um bloco de código que pode ser executado e reutilizado. Para declarar uma função, você deve usar a palavra-chave function, seguida pelo nome da função e os parênteses ().
*/

//* > Definição da função.

// Definido uma função chamada greeting.
function greeting() {
  console.log("Olá, seja bem vindo(a) ao curso de JavaScript!"); // Imprime no console a mensagem.
}

greeting(); // Chama a função greeting fazendo ela ser executada.

//* > Parâmetros da função.

// Definido uma função chamada greetingParameter com dois parâmetros chamados name e curso.
function greetingParameter(name, curso) {
  console.log(`Olá ${name}, seja bem vindo(a) ao curso de ${curso}!`);
}

greetingParameter("Luiz", "JavaScript"); // Chama a função greetingParameter passando o argumento "Luiz" para o parâmetro name e "JavaScript" para o parâmetro curso.

//* > Parâmetros padrão.

// Definido uma função chamada greetingDefault com dois parâmetros chamados name e curso, e com um parâmetro padrão chamado curso.
function greetingDefault(name, curso = "HTML e CSS") {
  console.log(`Olá ${name}, seja bem vindo(a) ao curso de ${curso}!`);
}

greetingDefault("Lucas"); // Chama a função greetingDefault passando o argumento "Luiz" para o parâmetro name e o parâmetro cursoDefault não é passado, então ele assume o valor padrão definido, no caso "JavaScript".

//* > Retorno da função.

// Definido uma função chamada sum que recebe dois parâmetros chamados n1 e n2.
function sum(n1, n2) {
  console.log("Isso será impresso no console!"); // Essa linha será executada, pois a função ainda não retornou o valor e foi finalizada.
  return n1 + n2; // Retorna a soma dos dois parâmetros.
  console.log("Isso não será impresso no console!"); // Essa linha não será executada, pois a função já retornou o valor e foi finalizada.
}

const result = sum(2, 3); // Chama a função sum passando o argumento 2 para o parâmetro n1 e 3 para o parâmetro n2 e armazena o retorno da função na constante result.

console.log(result); // Imprime no console o valor da constante result.