function alerta() {
    return this.edad + ' años.'
}

const miObjeto = {
    edad: 22
}

const bar = function () {
    return alerta.call(miObjeto)
}

bar() //?

setTimeout(() => {
    console.log(bar())
}, 1000);

bar.call(window)

function otraAlerta(edad){
    this.edad = edad
}
const bar2 = new otraAlerta(25)
console.log(bar.edad + ' años');
