// Operadores de Comparação
// vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// Operador de Comparação == e ===
//  o == faz uma comparação não tão estrita e o === faz uma comparação estrita ou seja o tipo de dado deve ser o mesmo quando usamos ===

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// Operadores Lógicos &&
// && compara se uma expressão "e" a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true
// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// Operadores Lógicos ||
// || compara se uma expressão "ou" outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true
// Retorna o primeiro valor true que encontrar
