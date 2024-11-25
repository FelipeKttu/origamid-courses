//FUNÇÕES
// é um bloco de codigo que pode ser executado e reutilizado !!
// Valores podem ser passados por uma funcção e a mesm retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}
// areaQuadrado(4) // 16
// areaQuadrado(5) // 25
// areaQuadrado(2) // 4

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7

// Parâmetros e Argumentos
// Ao criar uma função, você pode definir parametros
// Ao executar uma função, você pode passar argumentos
// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum també

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
// peso e altura são os parâmetros da função

imc(87, 1.75);
// o parênteses executa a função, se eu apenas definir a função com o "function" e não executar a mesma, nada que estiver dentro irá acontecer
// 87 e 1.75 são os argumentos passados para executar a função
// o resultado será um imc de 28.4 dados os argumentos

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de grama";
  } else {
    return "Você não gosta de nada";
  }
}
// corFavorita(); ira retornar 'você não gosta de nada' pois cor não teve valor atribuido

// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento

addEventListener("click", function () {
  console.log("Clicou");
});

//Posso usar diversos tipos de dados como parametros podem ser Strings, Numbers, Function, etc
//addEventListener é uma função nativa de browser já do JavaScript
// a função possui dois parametros, o primeiro parametro é qual tipo de evento que é o 'click' o segundo parametro é a função caso o primeiro ocorra
//function é uma função anônima
// function pode ser escrito como function () {} ou
// () => {}

// PODE OU NÃO RETORNAR UM VALOR
// quando não definimos o return a função roda normalmente mesmo tendo um valor undefined

// VALORES RETORNADOS

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade !";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//uma função pode retornar qualquer tipo de dado e até outras funções.
// retornar diferentes tipos de dados na mesma função não é uma boa pratica

// ESCOPO
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(totalPaises);
// variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
// erro, totalPaises não definido

//ESCOPO LÉXICO
// funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
