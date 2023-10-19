var { getByTextId } = require('@testing-library/jest-dom')
var { expect } = require('my-test-runner/expect')
// import { getByTextId } from '@testing-library/jest-dom'

test('JEST funcionando en el navegador', () => {
    expect(getByTextId('contenedor'))
})
