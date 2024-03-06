//Semana 05
//Exercicio 07 - Mapeamento de Elementos

//Utilizando o array numeros utilizado nos exercícios anteriores, 
//crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. 
//Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

const quadrados = numeros.map(numeroatual => numeroatual ** 2)

console.log("O array dos quadrados do números é ", quadrados)