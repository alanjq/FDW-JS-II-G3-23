const numeros = [1,2,3,4,5]
let dobles = []

for (var i = 0; i < numeros.length; i++) {
    var num = numeros[i];
    dobles.push(num * 2)
}

console.log(numeros);
console.log(dobles);

// Estas variables no existen fuera de su scope donde se declararon si se declaran con let o const
console.log(i); //?
console.log(num); //?
