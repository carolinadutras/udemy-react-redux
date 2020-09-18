import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props =>{
    return(
        <div>
            <DiretaFilho nome='Gabriel' idade={10} nerd={true}/>
            <DiretaFilho nome='Miguel' idade={10} nerd={true}/>

        </div>
    )
}