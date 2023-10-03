console.log("Código síncrono");

function dos(){
    console.log("Dos");
}

function eliminarAnuncio(){
    console.log('Eliminar anuncio');
    document.getElementById("anuncio").setAttribute("hidden", "")
    setTimeout(()=>{
        document.getElementById("anuncio").removeAttribute("hidden")
        console.log('volviendo a mostrar el anuncio');
        document.getElementById("anuncio").innerText = "Reaparecí"
    }, 1000)
}

function uno(){
    console.log("Uno");
    dos();
    console.log("Tres");
    setTimeout(()=>{
        console.log("Cuatro. Usando TimeOut");
        eliminarAnuncio()
    }, 1500)
    console.log("Fin.");
}

uno();
