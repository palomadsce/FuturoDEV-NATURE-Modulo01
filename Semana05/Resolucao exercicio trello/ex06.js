//Semana 05

//Exercicio 06 - Filtragem de Elementos
//Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores.
// Em seguida, imprima esse novo array no console.
// Utilize o método filter para realizar a operação de filtragem.

const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

const soPares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
      return true
    }
  })
  console.log("Pares ", soPares)
