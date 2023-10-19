var assert = require('assert')

describe('Prueba de Array', function () {
    describe('#indexof()', function () {
        it('Esto debería devolver -1 cuando no existe el valor buscado', function () {
            const arregloNumerico = [1, 2, 3]
            // Valor esperado
            const VALOR_ESPERADO = -1;
            // Resultado real
            const RESULTADO_OBTENIDO = arregloNumerico.indexOf(4)
            assert.equal(RESULTADO_OBTENIDO, VALOR_ESPERADO)
        })
    })
})
