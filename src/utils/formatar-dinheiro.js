const adicionarPontosInteiro = (valor) => {
    const [valorInteiro, valorDecimal] = valor.split(',');
    const numeros = valorInteiro.split('');
    const numerosOrdemReversa = numeros.reverse();

    const valorComPontos = numerosOrdemReversa.map((numero, index) => {
        if (index % 3 === 0 && index !== 0) return numero + '.';

        return numero;
    });

    const valorComPontosReverso = valorComPontos.reverse();

    return valorComPontosReverso.join('') + ','  + valorDecimal;
};

const formatarDinheiro = (valor) => {
    const valorComDuasCasas = valor.toFixed(2);
    const valorComVirgulaDecimal = valorComDuasCasas.replace('.', ',');
    

    return 'R$ ' + adicionarPontosInteiro(valorComVirgulaDecimal);
};

export default formatarDinheiro;
