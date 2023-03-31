let numero=parseInt(prompt("ingrese el numero"))
let par=numero%2==0
let impar=numero%2!=0
switch (true) {
    case par:
        console.log("el numero", numero, "es par");
        break;
    case impar:
        console.log("el numero", numero, "es impar", );
    break;
    default:
        console.log("ingrese cifras validas");
        break;
}