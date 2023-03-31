let numero=parseInt(prompt("ingrese un numero del 1 al 15"))
let primo=numero%2==0
let no=numero%2!=0
switch (true) {
    case primo:
        console.log("su numero es primo");
        break;
    case no:
        console.log("su numero no es primo");
        break;
    default:
        console.log("ingrese una cifra valida");
        break;
}