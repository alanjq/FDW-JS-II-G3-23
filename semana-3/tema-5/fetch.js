// Podemos obtener información usando fetch
const laUrlDelRecurso = "https://jsonplaceholder.typicode.com/posts/1"

// El primer parámetro es la dirección de donde quieres extraer (get) los datos
fetch(laUrlDelRecurso)
    // EN caso
    .then(respuestaDelServidor => respuestaDelServidor.json())
    .then(datos => console.log(datos))