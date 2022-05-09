import React from 'react';
import { Text }  from 'react-native';

const Item = ({ nome, preco, descricao }) => {
    return (
        <>
            <Text>{nome}</Text>
            <Text>{preco}</Text>
            <Text>{descricao}</Text>
        </>
    );
};

export default Item;
