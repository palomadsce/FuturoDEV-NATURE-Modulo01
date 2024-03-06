// SEMANA 04
// EXERCICIO 5 

//Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a nota para avaliação da série "Stranger Things”, 
//será apenas aceita três tipos de avaliação: ruim, bom e excelente.
/// Depois verifique quantas pessoas classificaram a série como ruim.

const prompt = require ('prompt-sync')()
let totalRuins = 0;
let contador = 1;
while (contador <= 4){
    let resposta = prompt("Qual a asua avaliação para a a serie stranger things? (bom), (ruim) ou (excelente)");
    if(resposta == "ruim" ) {
        totalRuins++;
    }

    contador++;
}

console.log(`Total de usuários que avaliou a série como ruim: ${totalRuins}`);