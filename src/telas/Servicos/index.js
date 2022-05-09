import React from 'react';
import { Text, FlatList } from 'react-native';

import Item from './componentes/Item';

import * as ServicosMock from '../../mock/servicos';

const Servicos = () => {
    return (
        <>
            <Text>Serviços</Text>

            <FlatList
                data={ServicosMock.servicos}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </>
    );
};

export default Servicos;
