/*
console.group('PRUEBA DE ARRAY')
console.log('Este debe devolver -1 si no se encuentra el valor')
const arregloNumerico = [1, 2, 3]
// Valor esperado
const VALOR_ESPERADO = -1;
// Resultado real
const RESULTADO_OBTENIDO = arregloNumerico.indexOf(4)
console.info(RESULTADO_OBTENIDO == VALOR_ESPERADO ? '√ Pasó la prueba' : 'x No pasó la prueba')
console.groupEnd()
*/
function it(mensaje, expresion) {
    console.log(mensaje + "\n")
    if (expresion() == true) {
        console.log('Pasó la prueba');
    } else {
        console.error('No pasó la prueba');
    }
}

it('Este debe devolver -1 si no se encuentra el valor', function () {
    const arregloNumerico = [1, 2, 3]
    // Valor esperado
    const VALOR_ESPERADO = -1;
    // Resultado real
    const RESULTADO_OBTENIDO = arregloNumerico.indexOf(4)
    return RESULTADO_OBTENIDO == VALOR_ESPERADO
})
