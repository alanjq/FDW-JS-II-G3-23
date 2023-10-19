var assert = require('assert')

// Esperamos la fecha de hoy en formato AAAA-MM-DD
function obtenerFechaActual() {
    let today = new Date()
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

function obtenerNumDiaActual() {
    let today = new Date()
    return today.getDate();
}


describe('Formato de fechas', function () {
    describe('Fecha en formato: AAAA-MM-DD', function () {
        // Fecha de hoy
        it('Esto debería devolver "2023-10-18"', function () {
            // Valor esperado
            const VALOR_ESPERADO = "2023-10-18"
            // Resultado real
            const RESULTADO_OBTENIDO = obtenerFechaActual()
            assert.equal(RESULTADO_OBTENIDO, VALOR_ESPERADO)
        })

        // Solo el día (número) de hoy
        it('Esto debería devolver "18"', function () {
            // Valor esperado
            const VALOR_ESPERADO = 18
            // Resultado real
            const RESULTADO_OBTENIDO = obtenerNumDiaActual()
            assert.equal(RESULTADO_OBTENIDO, VALOR_ESPERADO)
        })
    })
})

