//Todos são primitivos exceto os objetos
//Primitivos são dados imutáveis.
var nome = "felipe";
var idade = 20;
var time = "corinthians ";
var simbolo = Symbol();

//para verificar o tipo de dado eu uso typeof
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof time);
console.log(typeof simbolo);

//Você pode somar uma string e assim concatenar as palavras

var nome = "felipe";
var sobrenome = "vieira";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = "Felipe fez " + gols + " gols";
console.log(frase);

('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido
// não posso utilizar as mesmas aspas para passar a string e pra fechar
// utilizando \" eu ignoro a função original e posso usar ele como um simples caractere

var gols = 1000;
var frase1 = "Felipe fez " + gols + " gols";
var frase2 = `Felipe fez ${gols} gols`; // Utilizando Template String
console.log(frase2);

// Você deve passar expressões / variáveis dentro de ${} e utilizando aspas ao contrario``

// EXERCÍCIO

// Declare uma variável contendo uma string
var string = "string";

// Declare uma variável contendo um número dentro de uma string
var numero = "42";

// Declare uma variável com a sua idade
var minhaIdade = "20";

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var primeiroNome = "felipe";
var segundoNome = "vieira";
var meuNomeCompleto = `${primeiroNome} ${segundoNome}`;
console.log(meuNomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var itstime = "it's time";

// Verifique o tipo da variável que contém o seu nome
var tipoDeVariavel = typeof nome;
console.log(tipoDeVariavel);
