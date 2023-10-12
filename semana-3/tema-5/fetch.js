// Podemos obtener información usando fetch
const la_url_del_recurso = "https://jsonplaceholder.typicode.com/posts/1"

// El primer parámetro es la dirección de donde quieres extraer (get) los datos
fetch(la_url_del_recurso)
    // Como esperamos un JSON, usamos el método .json() del objeto respuesta
    // Al usar una función flecha en una sola línea, devuelve el resultado
    // de respuesta.json() y en el siguiente .then lo tomamos
    .then(respuesta => respuesta.json())
    // El .then anterior envía el objeto JSON y lo recibimos con la variable
    // datos en el siguiente .then
    .then(datos => console.log(datos)) // Aquí imprimimos o tratamos los datos según se necesite
    // Si ocurre algún problema al traer la información del recurso, se invoca al .catch
    .catch(razon => {
        // Imprimimos el mensaje de error (también podemos imprimir el objeto completo)
        console.error('Falló la petición por la siguiente razón.', razon.message)
    })
