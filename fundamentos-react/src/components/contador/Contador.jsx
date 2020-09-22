import React ,{Component}from 'react';
import "./Contador.css"
export default class Contador extends Component{
    state= {
        numero : this.props.numeroInicial || 0, //se nao for fornecido o inicial é zero
        passo: this.props.passoInicial || 5 ,
    };
    // constructor (props){
    //     super(props)
    //     this.inc = this.inc.bind(this)
    // } uma possivel solucao
    // fazer o this sempre apontar pra uma instancias

    // inc(){
    //     this.setState({
    //         numero: this.state.numero + 1,
    //     })
    // }
    // assim está dando um erro, que pode ser corrigido pelo constructor ou com arrow function conforme vemos abaixo
// ou fazer o arrow function no onClick={ e => this.inc()}

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }


    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (evento) =>{
        this.setState({
            passo : +evento.target.value,
        });
    };


render(){
    return(
        <div className= 'Contador'>
            <h2>
                Contador
            </h2>
            <div>
                <label htmlFor="">Passo :</label>
                <input id='passoInput' type='number' value= {this.state.passo} onChange={this.setPasso}></input>
            </div>
            <p>
             
                {this.state.numero}
            </p>
            <button onClick={this.inc}>+</button>
            <button onClick={this.dec}>-</button>

        </div>
    )
}

}