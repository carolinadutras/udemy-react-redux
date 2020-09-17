import React from 'react';
import If from './If'

export default props =>{

    const usuario = props.usuario || {}

    return(
        <div>
            <If test = {usuario && usuario.name}>
            Bem vindo <strong> {usuario.name} </strong>!
            </If>

            <If test = {!usuario || !usuario.name}>
            Bem vindo <strong> Amigo </strong>!
            </If>
        </div>
    )
}