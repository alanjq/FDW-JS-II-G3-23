/* function cuadradoCallback(a, b){
    setTimeout(()=>{
        console.log('STO', a * b);
        debugger
        return a * b
    }, Math.random() * 1000)
} */

//#region Opción A
const cuadradoCallback = (numa, numb) => new Promise(
    (resolve, reject) => {

        if (isNaN(numa)) {
            reject("A no un número.")
        } else if (isNaN(numb)) {
            reject("B no un número.")
        }

        resolve(Math.pow(numa, 2))
    }
)

// Llamando al Promise
cuadradoCallback(5, 'a')
    .then((resultado) => {
        console.log('Resultado cuadradoCallback:', resultado);
    })
    .catch((razonDelFallo) => {
        console.error('Falló por:', razonDelFallo);
    })
//#endregion


//#region Opción B
const funcionAsincrona = async function (varA, varB) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.pow(varA, 2))
        }, 1000)
    })
}

funcionAsincrona(5, 3)
    .then((r) => {
        console.log('Resultado (funcionAsincrona):', r);
    })
    .catch((razonDelFallo) => {
        console.log('Falló por:', razonDelFallo);
    })
//#endregion


//#region Opción C
const asincrona = async (value, othervalue) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.pow(value, 2))
        }, 2000)
    })
}

asincrona(5, 3)
    .then((res) => {
        console.log('Resultado (asincrona):', res);
    })
    .catch((razonDelFallo) => {
        console.log('Falló por:', razonDelFallo);
    })
//#endregion
