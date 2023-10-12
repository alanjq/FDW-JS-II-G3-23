const URL_API = "https://jsonplaceholder.typicode.com"
const API_COMENTARIOS = `${URL_API}/comments`
const API_POSTS = `${URL_API}/posts`

// Crear filas de la tabla
function crearHtmlFila({ id, name, email, body }) {
    return `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${body}</td>
        </tr>
    `
}


// function crearComentario(textoComentario, index) {
//     const todosLosComentarios = document.getElementById('comentarios')
//     todosLosComentarios.innerHTML = todosLosComentarios.innerHTML + `<div><b>${index}</b> - <p>${textoComentario}</p></div>`
// }

function llamarApi() {
    fetch(API_COMENTARIOS)
        .then(respuesta => respuesta.json())
        .then(respuestaComentario => {
            let htmlFilas = ""
            respuestaComentario.forEach((comentario) => {
                htmlFilas = htmlFilas + crearHtmlFila(comentario)
            });

            // Agregar el HTML generado a la tabla
            const tabla = document.getElementById('filasTabla')
            tabla.innerHTML = htmlFilas
        })
}

// Método parse
const TEXTO_JSON = '{"name":"forkify","version":"1.0.0","description":"","source":"index.html"}'
const usuario = {
    nombre: 'alan',
    configuracion: {
        idioma: 'español',
        edad: ''
    }
}

// Que se dispare el llamado a la función
setTimeout(()=>{
    llamarApi()
}, 1500)