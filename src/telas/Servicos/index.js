import React from 'react';
import { FlatList } from 'react-native';

import Item from './componentes/Item';

import * as Mocks from '../../mock';

const Servicos = () => {
    return (
        <FlatList
            data={Mocks.servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
            removeClippedSubviews={false}
        />
    );
};

export default Servicos;
