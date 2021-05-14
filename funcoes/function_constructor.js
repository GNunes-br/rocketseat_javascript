/*
    function() constructor

    * expressao new
    * criar um novo objeto
    * this keyboard

*/

function Person(name){
    this.name = name
    this.walk = () => {return 'está andando'}
}

const Guilherme = new Person('Guilherme')
const João = new Person('João')
const Maria = new Person('Maria')
console.log(Guilherme.name, Guilherme.walk())
console.log(João.name, João.walk())
console.log(Maria.name)

let texto = new String('Guilherme')
console.log(texto)

let data = new Date('2021-05-13')

console.log(data)