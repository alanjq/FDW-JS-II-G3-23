// Esperamos la fecha de hoy en formato AAAA-MM-DD
function obtenerFechaActual() {
    let today = new Date()
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`
}
obtenerFechaActual()//?
