//Semana 05

//Exercicio 05 - Ordenação Crescente
//Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. 
//Em seguida, ordene esse novo array em ordem crescente e 
//imprima-o no console.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

const numerosOrdenados = [...numeros]

numerosOrdenados.sort((numero1 , numero2) => numero1 - numero2)

console.log(`A lista de números ordenados é ${numerosOrdenados.join(" ")}`)