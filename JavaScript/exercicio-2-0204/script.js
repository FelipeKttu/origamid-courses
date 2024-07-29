// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 20;
var parenteIdade = 12;

if (minhaIdade > parenteIdade) {
  console.log("Você é mais velho que seu parente !!");
} else if (minhaIdade === parenteIdade) {
  console.log("Você tem a mesma idade que seu parente !!");
} else {
  console.log("Você é mais novo que seu parente !!");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
// a expressão retorna o ultimo verdadeiro ou o ultimo falso
// 5 - 2 = 3, 5 - " " = 5, (5 - 2) = 3. no segundo caso o valor continua pois a string tinha apenas um espaço, caso fosse prenchida com letras o valor seria NaN
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
// true pois possui valor dentro da variavel
var idade = 28;
// // true pois possui valor dentro da variavel
var possuiDoutorado = false;
// false pois a variavel é '= false'
var empregoFuturo;
// false pois não tem valor ainda
var dinheiroNaConta = 0;
// false pois o valor atribuido é 0 que é igual a false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil tem um total de habitantes maior que a China !!");
} else if (brasil === china) {
  console.log("Brasil tem um total de habitantes igual a China !!");
} else {
  console.log("Brasil tem um total de habitantes menor que a China !!");
}
// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// false pois a o primeiro if já é falso pois "Gato" não é igual a "gato" ai ele vai e ignora o restante e resulta em else que é o para fazer o console.log de "Falso"
// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// if está procurando o primeiro verdadeiro, ("Gato" === "gato") não é verdadeiro porêm 5 > 2 é, isso resulta em console.log("Gato" && "Cão") que resulta em cão pois && entrega o ultimo verdadeiro ou o primeiro falso
