const calculadora = require('../calculadora.js');

describe('Calculadora',() => {
    test('Soma de dois numeros',() => {
        let resultado = calculadora.soma(2,3);
        expect(resultado).toBe(5);
    }),
    test('Soma de dois numeros',() => {
        let resultado = calculadora.soma(1,2);
        expect(resultado).toBe(3);
    }),
    test('Divisão de dois números',()=>{
        let resultado = calculadora.divisao(10,2);
        expect(resultado).toBe(5);
    })
    ,
    test('Divisão por 0',()=>{
        let resultado = calculadora.divisao(10,0);
        expect(resultado).toBe('invalido');
    })
})