//Estrutura de repetição
//for 

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue; //Pula a execução do momento
    } else if(i === 2){
        break; // Para a execução do loop
    }

    console.log(i)
}