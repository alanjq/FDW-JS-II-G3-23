// Archivo javascript original
function responderDespuesDe2Seg(){
    return new Promise(resolver=>{
      setTimeout(()=>{
        resolver('Respuesta')
      }, 2000)  
    })
}

async function asyncCall(){
    console.log('Llamando')
    const resultado = await responderDespuesDe2Seg()
    console.log(resultado);
}

asyncCall()
