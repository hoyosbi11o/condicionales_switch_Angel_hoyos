let numero = prompt("ingrese un numero");
if (numero % 4==0 && numero % 100!==0  || numero%400==0) {
    console.log("el año si es bisiesto");
}else{
    console.log("el año no es bisiesto");
}