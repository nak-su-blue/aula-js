function exemploBasico(){
    alert("Olá mundo");
}
function exemploVariaveis(){

   // Variável que permite armazenar informações
   
   //esta variável é do tipo string (permite armazenar texto)
    let estabelecimento = "Shablau"; //string
    let produto = "Burguer Bacon";
    //esta variável é o tipo int (permite armazenar número inteiro)
    let quantidade = 7;
    //esta variável é do tipo float(permite armazenar número real)
    let preco = 30.91;
    //calcular o total do pedido (tipo float)
    let total = quantidade * preco; 

    //alterar o valor da variável 
    estabelecimento = "Shablau LTDA";

    //apresentar a variável no console
    console.log("estabelecimento: " +estabelecimento);

    alert("Variáveis: \nEstabelecimento\n" +estabelecimento+
        "\nproduto: " + produto + 
        "\nquantidade: " + quantidade +
        "\npreco: R$" + preco +
        "\ntotal: R$" + total
    );
}
function exemploCalcularIdade(){
    //Preciso armazenar o nome e ano de nascimento
    //Depois calcular a idade
    //Apresentar todas as informações
    let nome = "Judity da Silva"; //string
    let anoNascimento = 1997; // int
    let anoAtual = 2026;
    let idade = anoAtual - anoNascimento;
    
}

function exemploBoolean(){
    //armazenar se uma pessoa está empregada ou não
    let nome = "joão";
    //boolean serve para armazenar true(verdadeiro) ou false(falso)
    let empregado = false; //boolean

    //joãozinho passou em uma entrevista
    empregado = true;
    alert("nome: " + nome + "\nempregado: " + empregado);
}
function calcularAumentoSalario(){
    let salario = 3504.20; //float
    let percentual = 20.42;

    let valorAumento = (salario * percentual) / 100;

    let salarioNovo = salario + valorAumento;

    alert("Valor do aumento: R$" + valorAumento + "\nnovo salario: R$" + salarioNovo);


}
function calcularSalarioAlternativa(){
    let salario = 3504.20; //float
    let percentual = 20.42 / 100 + 1; //1.2042
    let salarioNovo = salario * percentual;
    alert("Novo Salario: R$" + salarioNovo);
}


function exercicio01(){
    let nome = "rivia";
    let sobrenome = "andrade";
    let corFavorita = "verde";
    let anoNascimento = 2003;
    let auxilioEducacao = 200;
    let jogaRpg = false;
    
    jogaRpg = true;
    corFavorita = "roxo";
    alert("Nome: " + nome + "\nSobrenome: "+ sobrenome +
        "\nCor favorita: " + corFavorita +
        "\nano nascimento: "+ anoNascimento +
        "\nAuxulio educação: R$" + auxilioEducacao +
        "\njoga RPG? :" + jogaRpg);
}

function converterParaInt(){
    //converter uma string para inteiro
    let numero = parseInt("32");

    let valor = numero * 2;
    alert("Número: " + numero + "\nNúmero * 2:" + valor);

}
function converterParaFloat(){
    let numero1 = parseFloat("32.01");
    let numero2 = parseFloat("0.01");
    
    let total = numero1 + numero2;
    alert("Número 01:" + numero1 +
        "\nNúmero 02:" + numero2 +
        "\nTotal: " + total);
}
//como apresentar somente duas casas decimais
//exercicio 01 (tudo deve ser convertido quando for int e float);
/* 
Nome
Quantidade de horas trabalhadas (inteiro)
valor hora (real)
auxílio creche(real)
desconto passe (real)
auxílio educação (real)
calcular o total e apresentar todos os dados */