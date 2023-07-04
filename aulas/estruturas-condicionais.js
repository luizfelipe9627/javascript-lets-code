//* > Estruturas condicionais.

/*
  Uma estrutura condicional é uma estrutura de controle que permite que um bloco de instruções seja executado ou não, dependendo de uma condição booleana.
*/

//* > If(condição) e else.

const age = 20; // Declarado uma variável chamada age e atribuído o valor 20 nela.

// Se a variável age for maior ou igual a 18, execute o bloco de código abaixo.
if (age >= 18) { 
  console.log('Você é maior de idade.'); // Imprime no console a mensagem.
} // Caso contrário, execute o bloco de código abaixo.
else {
  console.log('Você é menor de idade.'); // Imprime no console a mensagem.
}

const media = 5; // Declarado uma variável chamada media e atribuído o valor 7 nela.

//* > Else if(condição).

// Se a variável media for maior ou igual(>=) a 7, execute o bloco de código abaixo.
if(media >= 7) {
  console.log('Aprovado');
  // Senão, se a variável media for menor(<) que 7 e media for maior ou igual(>=) que 5, execute o bloco de código abaixo.
} else if(media >= 5) {
  console.log('Recuperação');
  // Senão, se a variável media for menor(<) que 5, execute o bloco de código abaixo.
} else {
  console.log('Reprovado');
}