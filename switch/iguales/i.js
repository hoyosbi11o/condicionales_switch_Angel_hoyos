let numero1=parseInt(prompt("ingrese un numero"))
let num2=parseInt(prompt("ingrese el segundo numero"))
let mayor= numero1>num2
let menor= numero1<num2
let igual= numero1==num2
switch (true) {
    case mayor:
        console.log("el numero", numero1, "es mayor a", num2);
        break;
    case menor:
        console.log("el numero", numero1, "es menor a", num2);
        break;
    case igual:
        console.log("el numero", numero1 ,"es igual a", num2);
        break;
    default:
    console.log("ingrese numeros no letras");
        break;
}