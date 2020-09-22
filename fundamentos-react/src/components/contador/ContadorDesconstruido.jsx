import React, { Component } from "react";
import "./Contador.css";

import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0, //se nao for fornecido o inicial é zero
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador Desconstruido</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo}  setPasso={this.setPasso}/>  {/* //passando via props os dados do pai para o filho- comunicacao direta, e passando de filho pra pai indireto */}
        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}
