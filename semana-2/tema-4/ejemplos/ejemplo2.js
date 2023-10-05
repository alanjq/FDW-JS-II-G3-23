var nombre = "John Doe"

var a = "aqui"

function primera() {
    var a = "Hello"
    segunda()
}

function segunda() {
    var b = "Hi"
    a // ?
    tercera()
}

function tercera() {
    a // ?
    var c = "Hey!"
}

primera()

a //?

