const API_URL = 'https://jsonplaceholder.typicode.com'

function validarObjetoRespuesta(respuestaApi) {
    console.log('respuestaApi', respuestaApi);
    if (respuestaApi.ok) {
        return respuestaApi.json()
    }
}

fetch(`${API_URL}/todos/1`) // Devuelve una promesa
    // Validamos la respuesta
    .then(validarObjetoRespuesta)
    // Función dentro del then
    .then(function (algo) {
        console.log('recibimos', typeof algo, algo);
        // enviar el título
        return algo.title
    })
    .then(function (titulo) {
        console.log('Título:', titulo);
    })
    .catch()



fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(respuesta => {

        for (let index = 0; index < respuesta.length; index++) {
            const publicacion = respuesta[index];
            console.log('Post:', publicacion.title);
        }

        const respuestaForEach = respuesta.forEach((publicacion, index) => {
            console.log('Post', index + 1, ":", publicacion.title);
        });

        const respuestaMap = respuesta.map((publicacion, index) => {
            console.log('MAP Post', index + 1, ":", publicacion.title);
            return publicacion
        });

        console.log('respuestaForEach', respuestaForEach);
        console.log('respuestaMap', respuestaMap);
    })



