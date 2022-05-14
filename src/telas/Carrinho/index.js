import React from 'react';
import { FlatList } from 'react-native';

import TelaPadrao from '../../componentes/TelaPadrao';

import Item from './componentes/Item';

import * as Mocks from '../../mock';

const Carrinho = () => {
    return (
        <TelaPadrao>
            <FlatList
                data={Mocks.carrinhos}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
                removeClippedSubviews={false}
            />
        </TelaPadrao>
    );
};

export default Carrinho;
