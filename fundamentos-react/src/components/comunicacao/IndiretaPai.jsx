import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
    const [a,b]=[1,2]
    let [nome, setNome ]= useState('?');
    let [idade, setIdade] = useState (0);
    let [nerd, setNerd] = useState(false);
  //nome, idade, nerd -  filho vai passar pro pai
function fornecerInformacoes (nome, idade, nerd){
console.log(nome, idade, nerd)
setNome(nome)
setIdade(idade)
setNerd(nerd)
}
  return( 
  <div>
      <div>Pai</div>
      <div>
  <span>{nome }</span>
  <span><strong>{idade }</strong></span>
  <span>{nerd ? 'verdadeiro': 'falso'}</span>

      </div>
<IndiretaFilho quandoClicar={fornecerInformacoes}> Indireta filho</IndiretaFilho>
  </div>
  )
};
