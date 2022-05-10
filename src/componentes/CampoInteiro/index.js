import React from 'react';
import { TextInput } from 'react-native';

const CampoInteiro = ({ value, onChange, ...props }) => {
    return (
        <TextInput
            keyboardType='number-pad'
            selectTextOnFocus
            value={String(value)}
            onChangeText={(novoValor) => onChange(novoValor)}
            {...props}
        />
    );
};

export default CampoInteiro;
