let numero=prompt("ingrese el numero")
let contador=0
let acumulador=0
while (contador<=numero) {
    acumulador=contador+numero
    contador++
    if (contador%2!=0) {
        console.log("los numeros impares son:", contador);
    }
}