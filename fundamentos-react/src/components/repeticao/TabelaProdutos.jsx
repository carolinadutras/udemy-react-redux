import React from 'react';
import produtos from '../../data/produto';

export default (props)=>{

const renderLista = produtos.map((produto)=>{
return(<div>

<tr key={produto.id} style={{border:'solid 1px '}}> 
<td >
{produto.id} -
</td>
<td>
{produto.nome} - 
</td>
<td>
{produto.preco}
</td>
</tr>

</div>)
})
return(
    <div>
        {renderLista}
    </div>

)
}