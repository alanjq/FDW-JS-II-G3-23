function multiply(numA, numB){
    console.log('Método llamado: multiply. Parámetro numA', numA, 'numB', numB);
    return numA * numB;
}

function cuadrado(numero){
    console.log('Método llamado: cuadrado. Parámetro: ', numero);
    let r = multiply(numero, numero)
    console.log(r)
}

cuadrado(5)