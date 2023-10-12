// Traemos el formulario
const API_URL = 'https://jsonplaceholder.typicode.com/posts/1'

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    enviarUsandoPut()
})

// Uso de PUT con fetch
function enviarUsandoPut() {
    const formData = new FormData(formulario)
    const data = Object.fromEntries(formData)

    fetch(API_URL, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log('resultado', data))
        .catch((error) => console.log(error))
}
