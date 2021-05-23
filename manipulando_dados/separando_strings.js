/*
    Manipulando Strings e Números

    Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
// split(separador) separa o array
console.log(myArray)

let phraseWithUnderscore = myArray.join('_')
// join(separador) junta o array
console.log(phraseWithUnderscore)