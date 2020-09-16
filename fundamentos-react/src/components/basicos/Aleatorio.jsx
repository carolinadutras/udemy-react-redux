import React from 'react'

export default function Aleatorio(props){
    const {
        min,
        max
    } = props
    const aleatorio = parseInt(Math.random() * (max - min +1)) + min
    
// console.log(aleatorio)
    return(
        <React.Fragment>
            <h2>This is a Random number</h2>
    <p>Valor mínimo : <strong>{min}</strong></p>
    <p>Valor máximo : <strong>{max}</strong></p>
    <p>Valor aleatório : <strong>{aleatorio}</strong></p>
        </React.Fragment>
    )
}