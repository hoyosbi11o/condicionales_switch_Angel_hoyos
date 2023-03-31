alert("Ingrese un numero de inicializacion y un numero finalizacion")
let numero=parseInt(prompt("Ingrese el numero de inicializacion"))
let numero1=parseInt(prompt("Ingrese el numero de finalizacion"))
let letra="*"
let acumuladora=""
for (let index = numero; index <=numero1; index++ ){
    acumuladora=acumuladora+letra
    console.log(acumuladora);
}

let letra2="*"
let acumuladora2=""
for (let index = numero1; index >= numero; index-- ){
    acumuladora2=""
    for (let n=1; n <=index; n++){
        acumuladora2=acumuladora2+letra2
    }
    console.log(acumuladora2);
}















