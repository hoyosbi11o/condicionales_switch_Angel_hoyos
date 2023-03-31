let contador=1
let acumulador=0
let numero=prompt("ingrese el numero")
let n
let promedio
while (contador<=numero) {
  n=parseInt(prompt("ingrese a los numeros"))
  acumulador=acumulador+n
  contador++
  promedio=acumulador/numero

}
console.log(promedio);