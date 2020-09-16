import React from "react";
import "./Card.css";
export default (props) => {
  const cardStyle={
    backgroundColor: props.color || "#F00",
    borderColor: props.color || '#F00',
  }
  //a partir de um parametro onseguimos mudar o estilo
  return (
    <div className="Card" style={cardStyle}>
      {/* // se quiser por um objeto dentro de style colocar entre duas chaves, 
      style={{    backgroundColor: props.color || "#F008", */}
    {/* borderColor: props.color || '#F008',}} */}
      <div className="Title">{props.titulo}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};
