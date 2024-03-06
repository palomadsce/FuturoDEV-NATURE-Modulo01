// SEMANA 04
// EXERCICIO 7

//Você foi contratado por um supermercado para catalogar a compra de uma cliente. 
//Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, 
//só serão aceitas as seguintes respostas:
//(1)Hortifruti
//(2)Laticínios
//(3)Carnes
//(4)Peixes
//(5)Aves
//(6)Fechar pedido
//Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
//Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
//Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.

const prompt = require ('prompt-sync')()

let sumOfProducts = [0, 0, 0, 0, 0]; //array que armazena a quantidade de produtos comprados

let option; //variável que armazena a opção escolhida pelo usuário

do {
  option = parseInt(
    prompt(
      "Qual produto você deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar "
    )
  ); //o parseInt para que o prompt retorne um número inteiro

  if (option < 1 || option > 6) { 
    //se a opção escolhida for menor que 1 ou maior que 6, o usuário será alertado
    console.log("Opção inválida. Tente novamente.");
    break;
  }
  if (option === 6) { //se a opção escolhida for 6, o loop é quebrado aqui  

    break;
  }

  let quantity = parseInt(
    prompt(`Quantas unidades do produto você deseja comprar?`)
  ); 
  sumOfProducts[option - 1] += quantity; //a quantidade de produtos comprados é somada à posição correspondente no array
 
} while (option != 6); //condição de parada do loop

if (sumOfProducts.length === 0) { //se o array estiver vazio, o usuário será alertado
  console.log("Você não comprou nenhum produto.");
} else {
  let greaterQuantity = 0;
  let indexGreaterQuantity = 0;

  //o loop abaixo percorre o array sumOfProducts e verifica qual posição tem a maior quantidade de produtos comprados
  for (let i = 0; i < sumOfProducts.length; i++) {
    // se a quantidade de produtos na posição i for maior que a variável greaterQuantity,
    // a variável greaterQuantity recebe o valor da quantidade de produtos na posição i
    if (sumOfProducts[i] > greaterQuantity) { 
      greaterQuantity = sumOfProducts[i];
      indexGreaterQuantity = i; //variavel auxiliar que armazena a posição do array com a maior quantidade de produtos
    }
  }


  switch (indexGreaterQuantity + 1) {
    case 1:
      productName = "Hortifruti";
      break;
    case 2:
      productName = "Laticínios";
      break;
    case 3:
      productName = "Carnes";
      break;
    case 4:
      productName = "Peixes";
      break;
    case 5:
      productName = "Aves";
      break;
  }

  //Usuário é alertado sobre o produto com maior quantidade
  console.log(`O produto com maior quantidade é ${productName}`);
}