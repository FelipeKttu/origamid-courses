// NÚMEROS
var idade = 20;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; // 20000000000, quantidade de zeros ao lado, exponencial !!

console.log(idade);
console.log(gols);
console.log(pi);
console.log(exp);

// OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// Lembrando que soma + em Strings serve para concatenar

// OPERADORES ARITMÉTICOS (STRINGS)
var somaX = "100" + 50; // 10050 pois concatenou e saiu uma string
var subtracaoX = "100" - 50; // 50, string
var multiplicacaoX = "100" * "2"; // 200, string
var divisaoX = "Comprei 10" / 2; // NaN (Not a Number)
// É possível verificar se uma variável é NaN ou não com a função isNaN()

// NAN = NOT A NUMBER
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg', string
var pesoPorDois = peso / 2; // NaN (Not a Number)
