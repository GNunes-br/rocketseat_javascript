/*

    Manipulando Arrays

    Contar elementos de um array

*/

console.log([
    'a', 
    {type: 'array'}, 
    () => {return 'alo'}, 
].length)

console.log([
    'a', 
    {type: 'array'}, 
    () => {return 'alo'}, 
][1].type)

console.log([
    'a', 
    {type: 'array'}, 
    () => {return 'alo'}, 
][2]())