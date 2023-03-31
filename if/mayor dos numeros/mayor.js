let numero=parseFloat(prompt("Ingrese el primer numero"))
let numero1=parseFloat(prompt("Ingrese el segundo numero"))

if (numero>numero1) {
    console.log("El", numero,"es mayor que",numero1);
} else if (numero<numero1){
    console.log("El",numero,"es menor que",numero1);
}else{
    console.log("Los dos numeros son iguales");
}