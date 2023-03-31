let n = parseInt(prompt("ingrese un numero"));
let n1 =parseInt(prompt("ingrese el numero dos"));
let letra ="*";
let acumuladora ="";

for (let index = n; index <= n1; index++) {
    acumuladora+=letra;
    console.log (acumuladora);

}
let letras ="*";
let acumuladoras ="";

for (let index = n1 -1; index >= n ; index--) {
    
acumuladoras= "";
for (let indexx= 1; indexx < index; indexx++) {
    acumuladoras+=letras

    
}
console.log(acumuladoras);
}