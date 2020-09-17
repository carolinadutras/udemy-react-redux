import React from "react";
import "./TabelaProdutos.css";
import produtos from "../../data/produto";

export default (props) => {
  const renderLista = produtos.map((produto, i) => {
    return (
      <tr className={i % 2 == 0 ? "Par" : ""} key={produto.id}>
        <td>{produto.id} </td>
        <td>{produto.nome} </td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
        <table>
      <thead>
        <tr>
          <th>
            <strong>id </strong>
          </th>
          <th>
            <strong>Nome </strong>
          </th>
          <th>
            <strong>Preço </strong>
          </th>
        </tr>
      </thead>
      <tbody>{renderLista}</tbody>
      </table>
    </div>
  );
};
