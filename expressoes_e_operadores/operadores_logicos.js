// operadores lógicos (Logical operators)
// 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND && (condiçao 1 e condiçao 2)
console.log(pao && queijo) // tem queijo e pao
queijo = false
console.log(pao && queijo) // tem pao mas nao tem queijo
pao = false
console.log(pao && queijo) // nao tem pao e queijo
// OR || (condiçao 1 ou condiçao 2)
console.log(pao || queijo) // nao tem pao e queijo
queijo = true
console.log(pao || queijo) // nao tem pao mas tem queijo
pao = true
console.log(pao || queijo) // tem pao e queijo
// NOT ! (negar condicao)
console.log(!pao)
console.log(!queijo)
