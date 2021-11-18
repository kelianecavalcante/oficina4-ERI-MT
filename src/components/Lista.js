import React, { useState } from 'react';

import Form from './Form';

import ListaItem from './Itens';

function Lista(){

    const [lista, setLista] = useState([]);

    function addItens(item){

        if(!item.text || /^\s*$/.test(item.text)){
            return;
        }
        //esses ... pontinhos é o spread operator permite acessar o conteúdo de uma lista
        //escreve um novo item, porém, permanece os itens anteriores
        const newLista = [item, ...lista];

        setLista(newLista);
    }

    function removeLista(id){
        const newArray = [...lista].filter(item => item.id !== id);

        setLista(newArray);

    }

    return(

        <>
            <h1>Minicurso React  - Lista</h1>
            <Form onSubmit={addItens}/>
            <ListaItem
                itens={lista}
                removeLista={removeLista}

            />
        </>

    )
};

export default Lista;