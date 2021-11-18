import React from 'react';
import { RiDeleteBack2Line } from "react-icons/ri";

function Itens({ itens, removeLista }) {
    return itens.map((item, index) => (
        <div className={'lista-caixinha'} key={index}>
            <div key={item.id}>
                {item.text}
            </div>
            <div className='icones' >
                <RiDeleteBack2Line onClick={() => removeLista(item.id)}/>
            </div>
        </div>
    ))
};
export default Itens;