//Semana 07

//Os exercícios desta semana monta um mini projeto simulando uma estrutura de controle de estoque. 
//O intuito é praticar os conceitos de classe e objeto aprendidos em aula.
//Os exercícios devem ser executados em sequência.

//Ex 1 - Criando classe Produto
//Crie uma classe chamada Produto com os seguintes atributos:
//nome
//preco
//quantidade
class Produto {
    nome;
    preco;
    quantidade;

    //Ex 2 - Criando construtor da classe Produto.
    //Crie um construtor para a classe Produto que permita receber os valores base para cada um dos parâmetros.
    constructor(nome,preco,quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    //Ex 3 - Criando método Vender
    //Crie um método para a classe Produto chamado de Vender().
    //Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da quantidade do produto. 
    //Porém, para ser possível essa venda a quantidade vendida não pode ser maior que a quantidade disponível.
    //Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.
    vender(quantidadeVendida){
        if(quantidadeVendida > this.quantidade){
            console.log ("Estoque insuficiente")
            return
        }
        this.quantidade -= quantidadeVendida
    }

    //Ex 4 - Criando método Repor
    //Crie um método chamado Repor() dentro da classe Produto.
    //Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à quantidade do produto. 
    repor(Reposto){
        this.quantidade += Reposto
    }

    //Ex 5 - Criando método MostrarEstoque
    //Crie um método chamado de MostrarEstoque() dentro da classe Produto.
    //Este método deve exibir uma mensagem parecida com a seguinte:
    //“O produto CANETA BIC AZUL possui 5 unidades disponíveis”
    MostrarEstoque(){
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidade(s) disponivel(is).`)
    }

    //Ex 6 - Criando método AtualizarPreco
    //Crie um método chamada de AtualizarPreco dentro da classe Produto.
    //Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.
    AtualizarPreco(novoValor){
        this.preco = novoValor

    }
}

let produto = new Produto("CANETA BIC AZUL","1.99","10")
console.log(produto)

//Ex 7 - Criando classe Pessoa
//Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos:
//nome
//idade
//profissao
//Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.
class Pessoa{
    nome;
    idade;
    profissao;

    constructor(nome,idade,profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}
let pessoa = new Pessoa( "Paloma","23","recepcionista")
console.log(pessoa)

//Ex 8 - Criando classe Cliente
//Crie uma nova classe chamada de Cliente. 
//Esta classe deve herdar a classe Pessoa.
//Além disso ela deve possuir os seguintes atributos:
//telefone
//email
//clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
//Crie um construtor para receber os valores para todos os atributos da classe Cliente e também da classe Pessoa, 
//sendo necessário passar parâmetros para o construtor base da classe Pessoa.
class Cliente extends Pessoa{
    telefone;
    email;
    ClienteDesde; 

    constructor (nome,idade,profissao,telefone,email,ClienteDesde){
        super(nome,idade,profissao)
        this.telefone = telefone
        this.email = email
        this.ClienteDesde = ClienteDesde
    }
}

let cliente= new Cliente ("Paloma","23","recepcionista","123445222","aluno123","2022-10-01")
console.log(cliente)
