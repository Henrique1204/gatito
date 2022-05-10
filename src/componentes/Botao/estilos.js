import { StyleSheet } from "react-native";

import * as EstilosGlobais from "../../../estilos";

export const botao = (pequeno, invertido) => {
    return StyleSheet.create({
        width: 140,
        paddingVertical: pequeno ? 3 : 9,
        paddingHorizontal: 20,
        backgroundColor: invertido ? EstilosGlobais.cores.laranja : EstilosGlobais.cores.roxo,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    });
};

export const valor = (invertido) => {
    return StyleSheet.create({
        fontWeight: 'bold',
        textAlign: 'center',
        color: invertido ? EstilosGlobais.cores.roxo : EstilosGlobais.cores.laranja,
    });
};
