import React from 'react';
import { View, Text } from 'react-native';

import Botao from '../../../../componentes/Botao';
import formatarDinheiro from '../../../../utils/formatar-dinheiro';

import * as Estilos from './estilos';

const StatusCarrinho = ({ total }) => {
    return (
        <View style={Estilos.conteudo}>
            <View style={Estilos.total}>
                <Text style={Estilos.descricao}>Total do Carrinho:</Text>

                <Text style={Estilos.valor}>{formatarDinheiro(total)}</Text>
            </View>

            <View style={Estilos.botao}>
                <Botao invertido>Concluir Pedido</Botao>
            </View>
        </View>
    );
};

export default StatusCarrinho;
