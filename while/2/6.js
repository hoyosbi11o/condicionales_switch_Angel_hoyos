let contador=prompt("ingrese el dato")
while (contador <=100) {
  console.log(contador);
  if (contador % 6==0) {
    console.log("su dato es multiplo de 6");
  }else{
    console.log("su numero no es multiplo");
  }
  contador= contador+1
}