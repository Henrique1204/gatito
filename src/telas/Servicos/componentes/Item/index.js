import React from 'react';
import { View, Text, Button }  from 'react-native';

import * as Estilos from './estilos';

import CampoInteiro from '../../../../componentes/CampoInteiro';

const Item = ({ nome, preco, descricao }) => {
    const [quantidade, setQuantidade] = React.useState(0);

    return (
        <>
            <View style={Estilos.informacao}>
                <Text style={Estilos.nome}>{nome}</Text>
                <Text style={Estilos.descricao}>{descricao}</Text>
                <Text style={Estilos.preco}>{preco}</Text>
            </View>

            <View style={Estilos.carrinho}>
                <View>
                    <View style={Estilos.valor}>
                        <Text style={Estilos.descricao}>Quantidade:</Text>

                        <CampoInteiro value={quantidade} onChange={setQuantidade}/>
                    </View>

                    <View style={Estilos.valor}>
                        <Text style={Estilos.descricao}>Preço:</Text>
                        <Text style={Estilos.preco}>{(quantidade * preco).toFixed(2)}</Text>
                    </View>
                </View>

                <Button title='Adicionar' />
            </View>

            <View style={Estilos.divisor} />
        </>
    );
};

export default Item;
