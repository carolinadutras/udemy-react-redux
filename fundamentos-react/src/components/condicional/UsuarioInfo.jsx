import React from 'react';
import If, {Else} from './If'

export default props =>{

    const usuario = props.usuario || {}

    return(
        <div>

            <If test = {usuario && usuario.name}>
            Bem vindo <strong> {usuario.name} </strong>!
            
            
            <Else test = {!usuario || !usuario.name}>
            Bem vindo <strong> Amigo </strong>!
            </Else>
            
            </If>

        </div>
    )
}