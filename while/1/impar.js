let contador=prompt("ingrese el numero")
while (contador <=100) {
  console.log(contador);
  if (contador%2!=0) {
    console.log("su numero es impar");
  }else{
    console.log("su numero es par");
  }
  contador= contador+1
}