let susceptibles = 90000
let infectados = 10000
let recuperados = 0
let tasa_interacion = 2
let probabilidad_contagio = 0.1
let contagios = 0
basic.forever(function () {
    contagios = infectados * (tasa_interacion * susceptibles) / (susceptibles + infectados + recuperados) * probabilidad_contagio
    basic.showString("CONT:")
    basic.showNumber(contagios)
})
