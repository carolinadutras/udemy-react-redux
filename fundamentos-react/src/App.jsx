import React from "react";
import "./App.css";
import GeradorMega from './components/megasena/GeradorMega.jsx'
import ContadorDesconstruido from './components/contador/ContadorDesconstruido'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import DiretaPai from "./components/comunicacao/DiretaPai";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">

      <Card titulo=" #14 - Gerador Surpresinha da Mega   " color="#B72EBF">
          <GeradorMega qtde={6}/>
        </Card>
      <Card titulo=" #13 - Contador Desconstruido   " color="#FFC300">
          <ContadorDesconstruido ></ContadorDesconstruido>
        </Card>
      <Card titulo=" #12 - Contador   " color="#FFC300">
          <Contador numeroInicial = {10} ></Contador>
        </Card>
      <Card titulo=" #11 - Componente controlado (Input)  " color="#4C0C50">
          <Input> </Input>
        </Card>
      <Card titulo=" #10 - Comunicação indireta  " color="#00D5FF">
          <IndiretaPai> </IndiretaPai>
        </Card>

      <Card titulo=" #9 - Comunicação direta  " color="#F000FF">
          <DiretaPai> </DiretaPai>
        </Card>

      <Card titulo=" #8 - Renderização condicional  " color="#8EFF00">
          <ParOuImpar numero ={22}> </ParOuImpar>
        <UsuarioInfo usuario ={{name: 'Carol'}}/>

        </Card>

      <Card titulo=" #7 - Exercicio Repetição  " color="#C70039">
          <TabelaProdutos />
        </Card>
        <Card titulo=" #6 - Repetição " color="#FFC300">
          <ListaAlunos />
        </Card>

        <Card titulo=" #5 - Componentes com filhos" color="#00BBFF">
          <Familia sobrenome="Dutra">
            <FamiliaMembro nome="Angela" />
            <FamiliaMembro nome="Carol" />
            <FamiliaMembro nome="Duda" />
          </Familia>
        </Card>

        <Card titulo=" #4 - Desafio Aleatório" color="#FF5733">
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#3 - Fragmentos" color="#581845">
          <Fragmento />
        </Card>

        <Card titulo="#2 -  Com Parametro" color="#FFC300">
          <ComParametro titulo="Média do aluno" nota={9.1} aluno="Pedro" />{" "}
        </Card>
        <Card titulo=" #1 - Primeiro Componente" color="#33FFBD">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
