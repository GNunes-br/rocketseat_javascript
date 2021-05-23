/*
    Manipulando Arrays

    1. Adiciopnar um item no fim,
    2. Adicionar um no começo
    3. Remover do fim
    4. Remover do começo
    5. Pegar somente alguns elementos
    6. Remover 1 ou mais itens em qualquer posição
    7. Econtrar a posição de um elemento no array
*/

let techs = ['html', 'css', 'js']
//1.
techs.push('nodejs')
//2.
techs.unshift('sql')
//3.
// techs.pop()
//4.
// techs.shift()
//5.
// console.log(techs.slice(1, 3))
//6.
// techs.slice(1,1)
//7.
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)