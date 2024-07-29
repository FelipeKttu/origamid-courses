// Boolean
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else
// uma condicional que verifica se uma expressão é verdadeira com if caso contrario o else é ativado

var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
// O valor dentro dos parênteses sempre será avaliado em false ou true

// Condicionais Else if  
// Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

// Switch
// o Switch verifica se uma variável é igual a diferentes utilizando o Case. caso ela seja igual, você pode fazer alguma coisa e utilizar o break; para cancelar a continuação e o valor default ocorrerá caso nenhuma das anteriores seja verdadeira

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// Trhuthy e Falsy
// existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana 

// Falsy
if(false)
  if(0) // ou -0
  if(NaN)
  if(null)
  if(undefined)
  if('') // ou "" ou ``

// Truthy
if(true)
  if(1)
  if(' ')
  if('andre')
  if(-5)
  if({})
  
//Operador lógico de negação '!'
// o operador ! nega uma operação booleana ou seja !true é igual a false e idem
// e o operador !! pode ser usado para verificar  se uma expressão é truthy ou falsy 

if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false