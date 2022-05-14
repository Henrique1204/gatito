import { StyleSheet } from 'react-native';
import * as EstilosGlobais from '../../../../../estilos';

export const conteudo = StyleSheet.create({
    padding: 24,
    backgroundColor: EstilosGlobais.cores.roxo,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
});

export const total = StyleSheet.create({
    alignItems: 'center',
});

export const descricao = StyleSheet.create({
    fontSize: 16,
    fontWeight: 'bold',
    color: EstilosGlobais.cores.claro,
});

export const valor = StyleSheet.create({
    marginVertical: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: EstilosGlobais.cores.laranja,
});

export const botao = StyleSheet.create({
    flexGrow: 1,
    alignItems: 'flex-end',
});
