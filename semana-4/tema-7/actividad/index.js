// Archivo index.js original
const array = [1, 2, 3]

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6)
}

function add(a = 5, b = 10) {
    return a + b
}
console.log(add());

var add2 = (a, b) => {
    return a + b
}

function* Hola(){
    yield 'Hola Gabriela'
    yield 'Hola Rocio'
    yield 'Hola Andrea'
}
var helloInstance = Hola()
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
console.log(helloInstance.next());
