//Semana 05
//Exercicio 04 - Soma de Elementos

//Utilizando o array numeros do exercício anterior, 
//calcule e imprima a soma de todos os elementos do array. 
//Utilize o reduce para realizar a soma.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}
const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
  }, 0)

  
  console.log("A soma dos números é ",soma)