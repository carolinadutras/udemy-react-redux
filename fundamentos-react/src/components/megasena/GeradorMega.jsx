import React, {useState} from 'react';
import  './mega.css'

export default props => { 



function gerarNumNaoContido (min, max, array){
    const aleatorio = parseInt(Math.random ()*(max + 1  - min)) + min 
    // gera um numero inteiro aleatorio dentro do minimoi e maximo
    return array.includes(aleatorio) ? 
    gerarNumeros(min, max, array) :
    aleatorio
}


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
// const qtde = props.qtde || 6
const [qtde, setQtde]= useState(props.qtde || 6)
// const numerosIniciais =  Array(qtde).fill(0) // sentando quantidade de numeros da surpresinha
const numerosIniciais =  gerarNumeros(qtde)// inicializando com numneros sorteados

const [numeros, setNumeros] = useState(numerosIniciais)

    return(
    <div className="Mega"> 
        <h2>Mega</h2>
        <h3>{numeros.join(' ')}</h3>
<div>
    <label>
        Quantidade de Numeros
    </label>
    <input 
    min='6'
    max='15'
    type='number' value={qtde} 
    onChange={e => {setQtde(+e.target.value)
        setNumeros(gerarNumeros(qtde))}}/> 
        {/* deixamos ele assincrono, atualiza toda hora */}
</div>
        <button onClick={e=>setNumeros(gerarNumeros(qtde))}> Gerar Surpresinha</button>

    </div>

    )

}