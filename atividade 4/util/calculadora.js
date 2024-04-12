function adicao(a, b) {
    return Number(a) + Number(b);
}

function subtracao(a, b) {
    return Number(a) - Number(b);
}

function multiplicacao(a, b) {
    return Number(a) * Number(b);
}

function divisao(a, b) {
    if (b == 0) {
        return 'Não é possível dividir por 0'; 
    } else {
        return Number(a) / Number(b);
    }
}

module.exports = {
    adicao,
    subtracao,
    multiplicacao,
    divisao
}

