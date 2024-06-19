// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.
// Parênteses para priorizar uma expressão
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6
// Mesma coisa para o decremento --x

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x

// OPERADORES ARITMÉTICOS UNÁRIOS
// O '+' e '-' tenta transformar o valor seguinte em número
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN
// Not a Number pois é uma string

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33
// o '+' transformou idade em um número e deixou de ser uma string , o mesmo ocorreu colocando o '-' mas um número negativo

var possuiFaculdade = true;
console.log(+possuiFaculdade); // aqui ele incrementou 1
