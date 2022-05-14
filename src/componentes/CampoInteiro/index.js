import React from 'react';
import { TextInput } from 'react-native';

import * as Estilos from './estilos';

const CampoInteiro = ({ value, onChange, style, ...props }) => {
    const atualiza = (novoValor) => {
        const valorString = novoValor.toString();

        if (valorString.match(/e\+/g)) return onChange(0);

        const valorSemLetras = valorString.replace(/\D/, '');
        const valorSemZerosEsquerda = Number(valorSemLetras);

        onChange(valorSemZerosEsquerda);
    };

    return (
        <TextInput
            keyboardType='number-pad'
            selectTextOnFocus
            value={String(value)}
            onChangeText={atualiza}
            style={[style, Estilos.campo]}
            {...props}
        />
    );
};

export default CampoInteiro;
