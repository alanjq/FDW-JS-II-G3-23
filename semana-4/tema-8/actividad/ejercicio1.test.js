describe('Ejercicio 1', () => {
    const value = 2 + 2
    // Probamos los diferentes valores
    test('Mayor a cero', () => {
        expect(value).toBeGreaterThan(0)
    })
    test('Mayor o igal a 1', () => {
        expect(value).toBeGreaterThan(1)
    })
    test('Menor que 5', () => {
        expect(value).toBeLessThan(5)
    })
    test('Menor o igual a 4', () => {
        expect(value).toBeLessThanOrEqual(4)
    })

    // toBe y toEqual son equivalentes en números
    test(`El mismo número ${value}`, ()=> {
        expect(value).toBe(value)
    })
    test('Es igual a la misma variable', ()=>{
        expect(value).toEqual(value)
    })
})