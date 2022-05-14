import React from 'react';
import { TouchableOpacity, View, Text }  from 'react-native';

import * as Estilos from './estilos';

import CampoInteiro from '../../../../componentes/CampoInteiro';
import Botao from '../../../../componentes/Botao';
import formatarDinheiro from '../../../../utils/formatar-dinheiro';

const Item = ({ nome, preco, descricao }) => {
    const [quantidade, setQuantidade] = React.useState(1);
    const [expandir, setExpandir] = React.useState(false);

    const expandirToggle = () => {
        setQuantidade(1);

        setExpandir((prevExpandir) => !prevExpandir);
    };

    return (
        <>
            <TouchableOpacity style={Estilos.informacao} onPress={expandirToggle}>
                <Text style={Estilos.nome}>{nome}</Text>
                <Text style={Estilos.descricao}>{descricao}</Text>
                <Text style={Estilos.preco}>{formatarDinheiro(preco)}</Text>
            </TouchableOpacity>

            {expandir && <View style={Estilos.carrinho}>
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

                <Botao>Adicionar</Botao>
            </View>}

            <View style={Estilos.divisor} />
        </>
    );
};

export default Item;
