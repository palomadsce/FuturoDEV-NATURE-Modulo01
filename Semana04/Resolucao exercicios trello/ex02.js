// SEMANA 04
// EXERCICIO 2 Crie uma função nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

//Chamando o prompt
const prompt = require ('prompt-sync')()


//Funcao receber numero
var n = prompt("Digite um numero: ");
var resto = n % 2;
if (resto == 0) {
    console.log("O número é par");
} else {
    console.log("O número é impar")
}
  