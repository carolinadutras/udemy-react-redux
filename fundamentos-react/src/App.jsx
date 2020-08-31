import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card"
export default function App(props) {
  return (
    <div id="app">
        <Card
        titulo='teste'/>
      <Aleatorio min={10} max={60} />
      <Fragmento />
      <ComParametro
        titulo="situacao do aluno"
        nota={9.1}
        aluno="Pedro"
      ></ComParametro>
      <Primeiro />
    </div>
  );
}
