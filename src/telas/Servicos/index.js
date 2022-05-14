import React from 'react';
import { FlatList } from 'react-native';

import Item from './componentes/Item';

import * as ServicosMock from '../../mock/servicos';

const Servicos = () => {
    return (
        <FlatList
            data={ServicosMock.servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
            removeClippedSubviews={false}
        />
    );
};

export default Servicos;
