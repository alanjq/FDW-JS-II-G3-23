const persona = {
    nombreCompleto: function () {
        // Devolvemos propiedades que no existen todavía
        return this.nombre + " " + this.apellido
    }
}

const persona1 = {
    nombre: "John",
    apellido: "Doe"
}

const persona2 = {
    nombre: "Mary",
    apellido: "Doe"
}

persona.nombreCompleto.call(persona1) // ?

// Mismo resultado que uniendo dos objetos
const personaCompleta = {...persona, ...persona1}
personaCompleta
