let angulo1=parseInt(prompt("ingrese el primer angulo"))
let angulo2=parseInt(prompt("ingrese el segundo angulo"))
let angulo3=parseInt(prompt("ingrese el tercer angulo"))
let suma=angulo1+angulo2+angulo3
let triangulo=suma==180
let triangulof=suma<=180
let triangulofa=suma>180
switch (true) {
    case triangulo:
        console.log("los angulos dados si dan un triangulo");
        break;
    case triangulof:
        console.log("los angulos dados no forman un triangulo");
        break;
    case triangulofa:
        console.log("los angulos dados no forman un triangulo");
        break;
    default:
        console.log("ingrese angulos");
        break;
}