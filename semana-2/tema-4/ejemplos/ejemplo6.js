const persona = {
    nombreCompleto: function (city, country) {
        // Devolvemos propiedades que no existen todavía
        return `${this.nombre} ${this.apellido} from ${city}, ${country}`;
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

persona.nombreCompleto.apply(persona2, ["Oslo", "Noruega"]) //?
