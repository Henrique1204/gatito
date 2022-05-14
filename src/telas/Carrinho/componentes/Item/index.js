import React from 'react';
import { View, Text }  from 'react-native';

import * as Estilos from './estilos';

import CampoInteiro from '../../../../componentes/CampoInteiro';
import Botao from '../../../../componentes/Botao';
import formatarDinheiro from '../../../../utils/formatar-dinheiro';

const Item = ({ nome, preco, descricao, quantidade: quantidadeInicial }) => {
    const [quantidade, setQuantidade] = React.useState(quantidadeInicial);

    return (
        <>
            <View style={Estilos.informacao}>
                <Text style={Estilos.nome}>{nome}</Text>
                <Text style={Estilos.descricao}>{descricao}</Text>
                <Text style={Estilos.preco}>{formatarDinheiro(preco)}</Text>
            </View>

            <View style={Estilos.carrinho}>
                <View>
                    <View style={Estilos.valor}>
                        <Text style={Estilos.descricao}>Quantidade:</Text>

                        <CampoInteiro style={Estilos.quantidade} value={quantidade} onChange={setQuantidade}/>
                    </View>

                    <View style={Estilos.valor}>
                        <Text style={Estilos.descricao}>Total:</Text>
                        <Text style={Estilos.preco}>{formatarDinheiro(quantidade * preco)}</Text>
                    </View>
                </View>

                <Botao>Remover do Carrinho</Botao>
            </View>

            <View style={Estilos.divisor} />
        </>
    );
};

export default Item;
