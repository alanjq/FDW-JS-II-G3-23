function metodoAlertaOriginal() {
    console.log(this.edad + ' años');
}

function masSaludos() {
    return 'Otro saludo más'
}

function getHora() {
    return new Date().getMilliseconds()
}

const miObjeto = {
    edad: 22,
    alerta: metodoAlertaOriginal,
    saludo: masSaludos,
    minutoActual: getHora(), // Se ejecuta al instante
    milisegundo: getHora, // Ejecuta el método cuando se llama
    objetoAnidado: {
        edad: 26,
        alerta: metodoAlertaOriginal
    }
}

miObjeto.alerta() // ?
miObjeto.objetoAnidado.alerta() // ?
