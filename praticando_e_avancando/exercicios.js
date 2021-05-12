//1. Declare um variável de nome weight
var weight
//2. Que tipo de dado é a variável acima?
console.log(typeof weight)
// Float
//3. Declare uma variável e atribua valores para cada um dos dados
let name = 'Guilherme'
let age = 18
let stars = 4.5
let isSubscribed = true
//4. A variável student abaixo é de que tipo de dados?
let student = {};
//Objeto
//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
student = {
    name : 'Guilherme',
    age : 18,
    stars : 4.5,
    weight: 70.5,
    isSubscribed : true
}
//4.2 Mostre no console as seguintes mensagens
/*
    <name> de idade <age> pesa <weight> pelos valores de cada objeto
*/
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg!`)
//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
let students = []
//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students = [student]
//7. Coloque no console o valor da posição zero do array acima
console.log(students[0])
//8. Crie um novo student e coloque ele na posição do Array students
student = {
    name: 'Maria',
    age: 20,
    stars: 5.0,
    weight: 60.2,
    isSubscribed: false
}
students[1] = student
//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
/*
    console.log(a)
    var a = 1

    Resposta: O valor se a é indefinido
*/
console.log(a)
var a = 1



