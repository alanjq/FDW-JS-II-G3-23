// Clase Película
// Todos las propiedades son obligatorias para crear el objeto


// Declaramos la clase película
class Pelicula {
    GENEROS_ACEPTADOS = "Acción, Adultos, Animación, Autobiografía, Aventura, Ciencia ficción, Cine negro, Comedia, Concursos de televisión, Crimen, Deportes, Documental, Drama, Familiar, Fantasía, Guerra, Historia, Musicales, Misterio, Noticias, Películas de vaqueros, Programa de entrevistas, Reality shows, Romance, Suspenso, Terror".split(', ')

    constructor(id, titulo, director, estreno, pais, generos, calificacion) {
        // Creamos las propiedades de la clase y le asignamos el valor del constructor
        this.id = this.validarIMBD_ID(id) ? id : '';
        this.titulo = this.validarTitulo(titulo) ? titulo : '';
        this.director = this.validarDirector(director) ? director : ''
        this.estreno = this.validarEstreno(estreno) ? estreno : ''
        this.pais = this.validarPais(pais) ? pais : '';
        this.generos = this.validarGeneros(generos) ? generos : '';
        this.calificacion = calificacion;
    }

    validarCadena(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}" está vacío.`)
            return false;
        }
        if (typeof valor !== "string") {
            console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto."`)
            return false;
        }
        return true;
    }

    validarIMBD_ID(id) {
        // Expresión regular: Dos letras minúsculas y 7 números
        const EXPRESION_REGULAR = new RegExp(/^([a-z]){2}([0-9]){7}$/)
        if (!EXPRESION_REGULAR.test(id)) {
            console.error(`IMDB id ${id} no es válido. Debe tener nueve caracteres, los dos primeros deben ser letras minúsculas y los siete restantes.`)
            return false;
        }
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) {
            console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos "${longitud}"`);
            return false;
        }
        return true;
    }

    validarTitulo(titulo) {
        return this.validarCadena('Título', titulo) && this.validarLongitudCadena('Título', titulo, 100);
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            return this.validarLongitudCadena("Director", director, 50);
        }
        return false;
    }

    validarNumero(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}" está vacío`)
            return false;
        }
        if (!typeof valor == 'number') {
            console.error(`${propiedad} "${valor}" no es un número.`)
            return false;
        }
        return true;
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de estreno", estreno)) {
            // Validar que el número tenga 4 dígitos
            const REGEXP = new RegExp(/^([0-9]){4}$/)
            if (!REGEXP.test(estreno)) {
                console.error(`Año de estreno: ${estreno} no es válido, debe ser un número de 4 dígitos.`)
                return false;
            }
        }
        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}" está vacío.`)
            return false;
        }
        if (!Array.isArray(valor)) {
            console.error(`${propiedad} No es un arreglo`)
            return false;
        }
        if (valor.length == 0) {
            console.error(`${propiedad} Es un arreglo vacío`)
            return false;
        }
        // Comprobar que los valores sean cadena
        let errores = valor.filter(elemento => !this.validarCadena(propiedad, elemento) ? elemento : null)
        debugger
        if (errores.length > 0) {
            return false;
        }
        return true;
    }

    validarPais(pais) {
        return this.validarArreglo("País", pais)
    }

    validarGeneros(generos) {
        if (!this.validarArreglo("Géneros", generos)) {
            console.error('Género no es un arreglo')
            return false;
        }
        generos.filter((unGenero) => {
            if (!this.GENEROS_ACEPTADOS.includes(unGenero)) {
                console.error('No se acepta.', unGenero);
                return false;
            }
        })
        return true
    }

}

const peli = new Pelicula('ab1234521', 'Edit the Expr2ession & Text', 'Tatches Text', 2025, ['mexico', 'usa', 'Brasil'])
