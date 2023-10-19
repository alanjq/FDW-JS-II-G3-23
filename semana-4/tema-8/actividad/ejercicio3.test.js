// Arrays
const ESTADOS = ['Nuevo León', 'Aguascalientes', 'Colima', 'Sinaloa', 'Durango', 'Sonora', 'Chihuahua', 'Veracruz', 'Nayarit']
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

describe('Estados y días', () => {
    test('Se encuentra "Nuevo León"', () => {
        expect(ESTADOS).toContain('Colima')
        expect(new Set(ESTADOS)).toContain('Nuevo León')
    })
})