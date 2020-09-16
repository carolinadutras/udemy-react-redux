import React from "react";

export default function ComParametro(props){
    // console.log(props)
    const status = props.nota >= 7 ? 'aprovado' : 'reprovado'
return ( 
    <div>
    <h2>{props.titulo}</h2>
    <p>{props.aluno} tem nota
        {props.nota} e foi 
        {status}</p>

    </div>

)}