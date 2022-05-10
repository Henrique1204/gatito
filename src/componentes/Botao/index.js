import React from "react";
import { TouchableOpacity, Text } from 'react-native';

import * as Estilos from './estilos';

const Botao = ({
    children,
    onPress,
    style,
    pequeno = false,
    invertido = false
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style?.botao, Estilos.botao(pequeno, invertido)]}>
            <Text style={[style?.valor, Estilos.valor(invertido)]}>{children}</Text>
        </TouchableOpacity>
    );
};


export default Botao;