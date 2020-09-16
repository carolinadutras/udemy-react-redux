import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">

        <Card titulo=" #4 - Desafio Aleatório" color= '#FF5733'> 
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#3 - Fragmentos" color= '#581845'>
          <Fragmento />
        </Card>

        <Card titulo="#2 -  Com Parametro" color ='#FFC300'>
          <ComParametro titulo="Média do aluno" nota={9.1} aluno="Pedro" />{" "}
        </Card>
        <Card titulo=" #1 - Primeiro Componente" color = '#33FFBD'>
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
