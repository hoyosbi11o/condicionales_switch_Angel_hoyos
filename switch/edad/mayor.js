let edad=parseInt(prompt("ingrese su edad"))
let edad1= 18>=edad
let edad2= 18<edad
switch (true&&false) {
    case edad1:
        console.log("usted es mayor de edad");
        break;
    case edad2:
        console.log("usted es menor de edad");
        break;
    default:
        console.log("ingrese una edad valida");
        break;
}
