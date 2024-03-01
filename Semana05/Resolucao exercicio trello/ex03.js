//Semana 05

//Exercicio 03 - Iteração Básica

//Crie um array chamado numeros contendo cinco números inteiros. 
//Utilize um loop for para imprimir cada número do array no console.
//Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

for(let i = 0; i < 5; i++){
  console.log(`O ${i + 1} número é ${numeros[i]}`)
}