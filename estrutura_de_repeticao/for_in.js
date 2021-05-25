//for...in

let person = {
    name: 'John',
    age: 30,
    weigth: 88.6
}

for (let property in person){ // Atribui ao property as propriedades do objeto
    console.log(property)
    console.log(person[property])
}