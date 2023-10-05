var ventana = {}

ventana.saludo = function () {
    console.log('Scope de saludo', this);
}

ventana.saludoPrincipal = () => {
    console.log('Scope de saludo con window', this);
}

function principal() {
    console.log('Scope de Principal', this);
    ventana.saludo()
}
