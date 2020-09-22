

function gerarNumNaoContido (min, max, array){
    const aleatorio = parseInt(Math.random ()*(max + 1  - min)) + min 
    // gera um numero inteiro aleatorio dentro do minimoi e maximo
    return array.includes(aleatorio) ? 
    gerarNumeros(min, max, array) :
    aleatorio
}

// console.log(gerarNumNaoContido(1, 60, [29, 34, 21, 54, 31, 53,]))  
// teste para ver se funciona


// function surpresinha(qtde){

//     return [1, 2, 5, 10, 13, 31]
// }

// console.log(surpresinha(6))


function gerarNumeros (qtde) {
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums)=>{
        const novoNumero = gerarNumNaoContido(1, 60, nums)
        console.log ([ ...nums, novoNumero ])
            return [...nums, novoNumero]
    }, [])
    .sort((n1, n2)=> n1 - n2) //coloca em ordem crescente
    // .reduce((acc, item)) //recebe o acumulador e o numero atual, acumulador é o novo array de numeros

    return numeros
}

console.log(gerarNumeros(7))