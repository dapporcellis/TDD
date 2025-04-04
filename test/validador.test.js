const soma = require('../calculadora.js');

describe('Calculadora',() => {
    test('Soma de dois numeros',() => {
        let resultado = soma(2,3);
        expect(resultado).toBe(5);
    })
})