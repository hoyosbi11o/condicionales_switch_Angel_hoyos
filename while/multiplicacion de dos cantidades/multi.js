let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = prompt("ingrese el segundo valor");

let contador = 1;
let acumuladora = 0;
while (contador <= num2){
    acumuladora = acumuladora + num1
  contador++
}
console.log("suma total :", acumuladora);