//const e let são locais e só funcionam no escopo onde foi criada
let z = "Sim";
console.log('Existe z antes do bloco?',z)

{
    // console.log('Existe z dentro do bloco?',z) //Há o z dentro do bloco, porém, não ocorre a elevação
    let z = 'Sim, existe'
    console.log('Existe z agora?!',z)
}


console.log('E agora, existe z depois do bloco?',z)

const y = 1
{
    {
        {
            const y = 0
            console.log('Existe y?',y);
        }
    }
}

console.log(y)