//Throw

function sayMyName(name = ''){
    if(name === ''){
        throw new Error('Nome é obrigatório')
    }

    console.log('Depois do erro')
}

//Try...Catch

try {
    sayMyName()
} catch(e){
    console.log(e)
}

console.log('Após o try/catch!')