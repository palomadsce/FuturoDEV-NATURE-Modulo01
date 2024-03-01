//Semana 05

//Exercicio 01- Acesso simples
//Crie um array chamado frutas contendo três frutas diferentes.
// Em seguida, imprima no console a segunda fruta do array.
//Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

//Resolução simples
//const frutas = [ "Banana", "Abacate", "Mamão"]
//console.log(frutas[1])

//Resolução usando prompt-sync
const prompt = require("prompt-sync")()
//Criando uma array chamando a fruta
const frutas = []
//Solicitando ao usuario para inserir as frutas
for (let i = 0; i < 3; i ++){
    frutas.push(prompt("Digite o nome da fruta: "))
}
//Imprimir nome da segunda fruta inserida pelo usuario
console.log(frutas[1])
