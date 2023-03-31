let n= prompt("ingrese un numero");
let contador=1
let suma = 0 
let acumuladora =0
while (contador<=n) {
    
    suma= contador+contador
    acumuladora= suma/contador
    acumuladora++
}
console.log( acumuladora);