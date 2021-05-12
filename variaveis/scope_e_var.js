//Var é global e também local
//hoisting ► Elevação
var x = "Sim"
{
    x = "Sim, existe"
}
console.log('> Existe x antes desse bloco?',x)

console.log('> Existe y antes do bloco?',y)
{
    var y = "Também existe" // = undefined, sim existe, mas não possui um valor definido
}
console.log("E depois do bloco?",y)