import { StyleSheet } from 'react-native';

import * as EstilosGlobais from '../../../../../estilos';

export const informacao = StyleSheet.create({
    padding: 24,
});

export const nome = StyleSheet.create({
    fontSize: 16,
    fontWeight: 'bold',
    color: EstilosGlobais.cores.laranja,
});

export const calculo = StyleSheet.create({
    marginVertical: 8,
    fontSize: 14,
    color: EstilosGlobais.cores.escuro,
});

export const preco = StyleSheet.create({
    marginVertical: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: EstilosGlobais.cores.roxo,
});

export const divisor = StyleSheet.create({
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: EstilosGlobais.cores.cinza,
});

export const carrinho = StyleSheet.create({
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const valor = StyleSheet.create({
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
});

export const descricao = StyleSheet.create({
    marginRight: 8,
    fontSize: 16,
    color: EstilosGlobais.cores.escuro,
});

export const quantidade = StyleSheet.create({
    width: 42,
});
