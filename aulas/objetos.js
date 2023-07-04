//* > Objetos.

/*
  Objetos são estruturas que permitem armazenar diversos valores em uma mesma variável, permitindo acessá-los por meio de um nome.
*/

//* > Como criar um objeto.

// Criado um objeto chamado person com as propriedades name e age.
let person = {
  name: 'John', // Propriedade name com o valor 'John'.
  age: 30, // Propriedade age com o valor 30.
}

console.log(person); // Imprime o objeto person no console.

console.log(person.name); // Imprime o valor da propriedade name do objeto person no console.
console.log(person['age']); // Imprime o valor da propriedade age do objeto person no console.

//* > Como adicionar um par de chave e valor em um objeto.

person.isStudent = true; // Adiciona a propriedade isStudent com o valor true ao objeto person.
person.name = 'Jane'; // Altera o valor da propriedade name do objeto person para 'Jane'.

console.log(person); // Imprime o objeto person com a nova propriedade no console.

//* > Como remover um par de chave e valor em um objeto.

delete person.age; // Remove a propriedade age do objeto person.

console.log(person); // Imprime o objeto person sem a propriedade age no console.

//* > Como percorrer um objeto.

// O for in(key in person) faz uma iteração em cada propriedade do objeto person e armazena a propriedade na variável key e executa o bloco de código para cada propriedade.
for (let key in person) { 
  console.log(key); // Imprime o nome da propriedade.
  console.log(person[key]); // Imprime o valor da propriedade.
}