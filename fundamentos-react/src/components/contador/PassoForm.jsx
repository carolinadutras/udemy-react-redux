import React from "react";

export default props => {
    return (
        <div>
        <label htmlFor="">Passo:</label>
        <input
            id="passoInput"
            type="number"
            value={props.passo}
            onChange={e => props.setPasso(+e.target.value)}// + converte para valor numerico, comunicacao indireta
        />
        </div>
    )
}