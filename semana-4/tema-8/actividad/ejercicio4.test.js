const ingles = 'en-US'
const espanol = 'es-ES'

function lenguajePagina(language) {
    switch (language) {
        case ingles.toLowerCase():
            return '/about-us'

        case espanol.toLowerCase():
            return '/acerca-de-nosotros'
    }
    return ""
}

test('Revisamos el valor de retorno del lenguaje seleccionado', () => {
    expect(lenguajePagina("es-ES")).toBe("/acerca-de-nosotros")
})

