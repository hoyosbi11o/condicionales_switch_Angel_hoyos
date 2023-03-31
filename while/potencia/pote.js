let a=parseInt(prompt("ingrese el numero"));
let b=parseInt(prompt("ingrese el numero con el cual lo quiere potenciar"));
let acomulador=1;
let contador=1;
while (contador<=b) {
  acomulador=acomulador*a
  contador++
 
}
console.log("el numero se repite",b,"el resutaldo es", acomulador);