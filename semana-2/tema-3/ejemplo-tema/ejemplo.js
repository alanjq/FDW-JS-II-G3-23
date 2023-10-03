
/*function nuevoId() {
    return "parrafo-" + Math.random() * 100
}

function crearIds() {
    midiv.innerHTML = `
        <p id=${nuevoId()}>ejemplo</p>
        <p id=${nuevoId()}>ejemplo</p>
        <p id=${nuevoId()}>ejemplo</p>
    `

}

var casa = {
    puertas: 2,
    ventanas: 4,
    color: 'azul',
    tocarTimbre: () => {
        console.log('alguien toca');
    },
    patio: null,
    terraza: undefined,
    // Ejemplo con SET
    perros: new Set(['firulais', 'solovino', 'solovino'])
}

const mascotas = ['firulais', 'solovino', 'solovino']

mascotas // ?

let resultado = [];
for (let pet = 0; pet < mascotas.length; pet++) {
    const mascota = mascotas[pet];
    if (!resultado.includes(mascota)) {
        resultado.push(mascota)
    } // ?
}
// Valores ya filtrados
resultado

resultado.length // ?

casa.perros.size //?

casa.perros.add("comesolo")

casa.perros.delete("comesolo")

casa.perros.delete("firulais")

casa.perros.size // ?


// Usando Map
let mes = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"]
])
mes.get(1) // ?

// Llaves con número
let estados = new Map([
    [1, "Aguascalientes"],
    [12, "Chihuahua"],
    [22, "Querétaro"],
    [25, "Veracruz"]
])

estados.get(12) //?

// Llaves con string
let idiomas = new Map([
    ['en', "Inglés"],
    ['es', "Español"],
    ['it', "Italiano"],
])

idiomas.get("en") //?

// Iteradores
let rango = {
    from: 1,
    to: 5
}

rango[Symbol.iterator] = function () {
    // Devolver el iterador
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

// Ejecutar el ejemplo
for (let num of rango) {
    console.log(num);
}


// Generadores
function* primosUnDigito() {
    yield 1;
    yield 2;
    yield 3;
    yield 5;
}

let primos = primosUnDigito()

primos[Symbol.iterator]
let suma = 0
for (let primos of primosUnDigito()) {
    suma += primos //?
}
suma // ?
*/

// Secuencia de fibonacci
function* fibonacciSequence() {
    let x = 0, y = 1;
    // For infinito
    for (; ;) {
        yield y;
        [x, y] = [y, x + y];
    }
}

function fibonacci(n) {
    for (let f of fibonacciSequence()) {
        if (n-- <= 0) {
            return f
        }
    }
}

fibonacci(10) //?
fibonacci(5) //?

// Otro ejemplo
function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while (n-- > 0) {
        let next = it.next()
        if (next.done) {
            return;
        } else {
            yield next.value;
        }
    }
}

// Una matriz de los primeros 5 números de Fibonacci
[...take(5, fibonacciSequence())] //?

// Unir arrays
let ejemplo_1 = [1, 2, 3];
let ejemplo_2 = [4, 5];

[...ejemplo_1, ...ejemplo_2, 8, 6, 7]; //?

// Proxys
let t = { x: 1, y: 2 };

let p = new Proxy(t, {});
p.x //?

delete p.y // Elimina y
t.y //?
p.z = 3
t.y = 5

t //?
p //?


// Propiedades dinámicas
const NOMBRE_PROPIEDAD = "p1";
function nombrePropiedadDinamica() {
    return "p" + 2;
}
let o = {}
o[NOMBRE_PROPIEDAD] = 1;
o[nombrePropiedadDinamica()] = 2;

o // ?

function usuario(nombre, apellido) {
    return nombre + "_" + apellido
}

let user = {};
user[usuario('Luis', 'Mariscal')] = 2
user[usuario('Levi', 'Avendaño')] = 3
user[usuario('Claudia', 'Espinoza')] = 4

user // ?
