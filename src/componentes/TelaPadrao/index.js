import React from 'react';
import * as ReactNative from 'react-native';

import * as Estilos from './estilos';
import * as EstilosGlobais from '../../../estilos';

const TelaPadrao = ({ children }) => {
    return (
        <>
            <ReactNative.SafeAreaView style={Estilos.container}>
                <ReactNative.StatusBar />

                <ReactNative.KeyboardAvoidingView
                    behavior={ReactNative.Platform == 'ios' ? 'padding' : 'height'}
                    style={EstilosGlobais.preencher}
                >
                    {children}
                </ReactNative.KeyboardAvoidingView>
            </ReactNative.SafeAreaView>
        </>
    );
};

export default TelaPadrao;
