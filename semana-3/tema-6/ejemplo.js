const objeto = {
    "name": "forkify",
    "version": "1.0.0",
    "description": "",
    "source": "index.html",
    "scripts": {
        "compilartodo": "jest pruebas.js && sass estilos.sass && parcel build index.html && parcel index.html",
        "start": "parcel index.html",
        "build": "parcel build index.html"
    },
    "keywords": ["a","b"],
    "author": "alan",
    "license": "ISC",
    "devDependencies": {
        "@parcel/transformer-sass": "^2.9.3",
        "parcel": "^2.9.3"
    }
}

objeto.name 
objeto.scripts.compilartodo
objeto.keywords[0] // "a"
objeto.keywords[1] // "b"

