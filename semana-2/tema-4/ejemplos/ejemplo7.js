const persona = {
    nombre: "John",
    apellido: "Doe",
    nombreCompleto: function () {
        // Devolvemos propiedades que no existen todavía
        return this.nombre + " " + this.apellido;
    }
}

const miembro = {
    nombre: "Hellen",
    apellido: "Nilsen"
}

let todoElNombre = persona.nombreCompleto.bind(miembro)

todoElNombre // ?