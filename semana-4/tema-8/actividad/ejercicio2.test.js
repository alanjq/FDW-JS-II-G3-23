const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

describe('Operaciones matemáticas', () => {
    test('Probamos la suma', () => {
        expect(sumar(1, 1)).toBe(2)
    })
    test('Probamos la resta', () => {
        expect(restar(3, 1)).toBe(2)
    })
    test('Probamos la multiplicación', () => {
        expect(multiplicar(2, 2)).toBe(4)
    })
    test('Probamos la división', () => {
        expect(dividir(10, 2)).toBe(5)
    })
})