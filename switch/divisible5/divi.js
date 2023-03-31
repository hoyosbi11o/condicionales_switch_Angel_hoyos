let numero=parseInt(prompt("ingrese numero"))
let divi=numero%5==0
let divi2=numero%5!=0
switch (true) {
    case divi:
        console.log("el numero",numero ,"es divisible con 5");
        break;
    case divi2:
        console.log("el numero",numero,"no es divisible con 5");
        break;
    default:
        console.log("ingrese una cifra valida");
        break;
}