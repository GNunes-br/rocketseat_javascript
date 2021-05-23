/*

    Manipulando Strings e Números

    Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
*/

let number = 456.6545645
console.log(number.toFixed(2).replace('.',','))
// O texto é convertido para uma String por conta da vírgula