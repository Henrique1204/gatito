import React from 'react';
import { FlatList } from 'react-native';

import TelaPadrao from '../../componentes/TelaPadrao';

import Item from './componentes/Item';
import StatusCarrinho from './componentes/StatusCarrinho';

import * as Mocks from '../../mock';

const Carrinho = () => {
    const total = Mocks.carrinhos.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    return (
        <TelaPadrao>
            <StatusCarrinho total={total} />

            <FlatList
                data={Mocks.carrinhos}
                renderItem={({ item }) => <Item {...item}  />}
                keyExtractor={({ id }) => String(id)}
                removeClippedSubviews={false}
            />
        </TelaPadrao>
    );
};

export default Carrinho;
