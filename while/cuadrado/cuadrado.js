let numero=prompt("ingrese un numero")
let contador=1
let acumulador=0
while (contador<numero) {
    acumulador=acumulador+contador**numero
    contador++
}
console.log(acumulador);