let entrada = [10, "X", "X", 2, 10, 10, true, true]

// Eliminar duplicados
const quitarDuplicados = (array_entrada) => {
    if (!Array.isArray(array_entrada)) {
        console.error("El valor que ingresaste no es un arreglo.", array_entrada);
        return;
    }
    if (array_entrada.length == 0) {
        console.error("El arreglo está vacío.", array_entrada);
        return;
    }
    if (array_entrada.length == 1) {
        console.error("El arreglo no tiene al menos dos valores.", array_entrada);
        return;
    }

    // Eliminar duplicados
    let sinDuplicados = array_entrada.filter((valor, indice) => array_entrada.indexOf(valor) == indice)
    console.info(array_entrada, sinDuplicados)
}

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["1", "3", "3", "4", "2"]); //?
quitarDuplicados(["10", "X", "X", "2", "10", 10, true, true]);

// Usando Set()
const duplicados = new Set(["1", "3", "3", "4", "2", true, true])
duplicados // ?


// Ejercicio 2
const limpiaAnagramaMap = (arr) => {
    let mapa = new Map();
    for (const item of arr) {
        let ordenado = item.toLowerCase().split('').sort().join('');
        mapa.set(ordenado, item);
    }
    return Array.from(mapa)
}

const INPUT_ARRAY = [
    "roma",
    "amor",
    "mora",
    "sopa",
    "paso",
    "sapo",
    "ropa",
    "paro",
    "proa"
]

limpiaAnagramaMap(INPUT_ARRAY) // ?
